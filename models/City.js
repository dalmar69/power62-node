var {mongoose} = require('../db/mongoose');

var Schema = mongoose.Schema;

var CitySchema = new Schema({
    _p_planet:{
        type:String
    },
    name:{
        type:String
    }, 
}); 

var City = mongoose.model('City', CitySchema, 'City');

module.exports = {City};