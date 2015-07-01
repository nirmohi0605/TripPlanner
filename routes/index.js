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
        .spread(function(hotel, ThingToDo, restaurant) {
            //res.json(data);
            console.log("all done");
            console.log(hotel);
            console.log(ThingToDo);
            console.log(restaurant);
        });
    // .then(function(results) {
    //     res.send(results[2]);
    // })
    //res.render('index', { title: 'Express' });

});

module.exports = router;