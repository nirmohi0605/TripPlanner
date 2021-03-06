var express = require('express');
var router = express.Router();
var models = require('../models/');
var Promise = require('bluebird');

/* GET home page. */
router.get('/', function(req, res, next) {
    Promise.all([models.Hotel.find().exec(), models.ThingToDo.find().exec(), models.Restaurant.find().exec()])
        .catch(function(err) {
            console.log(err);
        })
        .spread(function(hotels, thingsToDo, restaurants) {
            //res.json(data);
            var renderObj = {
                "hotels": hotels,
                "thingsToDo": thingsToDo,
                "restaurants": restaurants
            }
            renderObj.title = "Travel Planner"
            res.render('index', renderObj);
        });
});

module.exports = router;