var express = require('express');
var router = express.Router();
var models = require('../models/');

/* GET home page. */
router.get('/', function(req, res, next) {
    var selectionArr = [];
    models.Hotel.find().exec()
        .then(function(results) {
            selectionArr.push(results);
            return models.Restaurant.find().exec()
        })
        .then(function(results) {
            selectionArr.push(results);
            return models.ThingToDo.find().exec()
        })
        .then(function(results) {
            selectionArr.push(results);
            res.json(selectionArr);
        })
        .then(null, function(err) {
            console.log(err);
        })
    //res.render('index', { title: 'Express' });

});

module.exports = router;