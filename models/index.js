var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TripPlanner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));


var placeSchema = new mongoose.Schema({
    address: String,
    city: String,
    state: String,
    phone: String,
    location: [Number]
});

var hotelSchema = new mongoose.Schema({
    name: String,
    place: String,
    num_stars: {
        type: Number,
        min: 1,
        max: 5
    },
    amenities: {
        type: String,
        get: delimitComma
    }
});

function delimitComma(str) {
    return str.replace(/\s/g, "").split(',');
}
var thingToDoSchema = new mongoose.Schema({
    name: String,
    place: String,
    age_range: String
});

var restaurantSchema = new mongoose.Schema({
    name: String,
    place: String,
    cuisine: {
        type: String,
        get: delimitComma
    },
    price: {
        type: Number,
        min: 1,
        max: 5
    },
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);
var ThingToDo = mongoose.model('ThingToDo', thingToDoSchema);
var Hotel = mongoose.model('Hotel', hotelSchema);
var Place = mongoose.model('Place', placeSchema);

module.exports = {
    Restaurant: Restaurant,
    ThingToDo: ThingToDo,
    Hotel: Hotel,
    Place: Place
};