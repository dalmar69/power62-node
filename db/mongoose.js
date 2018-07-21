var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://heroku_c8g7fk6t:52660e5fhikqqk37q7sfchllec@ds153869.mlab.com:53869/heroku_c8g7fk6t', (err,db) => {
    if(err){
        console.log('error')
    }  
});

module.exports = {mongoose};