<<<<<<< HEAD
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
            console.log(renderObj);
            //res.json(renderObj);
            res.render('index', renderObj);
        });
});

module.exports = router;
=======
>>>>>>> d1fee11181cf552e0ef1ee768cbf6326a5f750a2
