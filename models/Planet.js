var {mongoose} = require('../db/mongoose');

var Schema = mongoose.Schema;

var PlanetSchema = new Schema({
    name:{
        type:String
    }, 
});

PlanetSchema.statics.getPlanetbyName = async function(name){
    try{
        var planet = await Planet.findOne({
            'name': name
        });
        return user;
    }catch(e){
        return 'User not found';
    } 
} 

var Planet = mongoose.model('Planet', PlanetSchema, 'Planet');



module.exports = {Planet};