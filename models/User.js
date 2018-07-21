var {mongoose} = require('../db/mongoose');
const _ = require('lodash');
// const jwt = require('../node_modules/jsonwebtoken'); Removed becuase it was throwing error will add back
const bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    otpURL:{
        type:String
    },
    name: {
        type:String
    },
    email: {
        type:String
    },
    username: {
        type:String
    },
    _p_planet: {
        type: mongoose.Schema.Types.ObjectId
    },
    _p_city: {
        type:String
    },
    starport: {
        type:String
    },
    optKey: {
        type:String
    },
    optVerified: {
        type:Boolean,
        default: false
    },
    optEnabled: {
        type:Boolean,
        default: false
    },
    otpURL: {
        type:String,
        default: false
    },
    _hashed_password:{
        type:String,
    },
    _email_verify_token: {
        type: String,
        default: false
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    _email_verify_token_expires_at: {
        type: String,
        default: false
    },
    _wperm:[{

    }],
    _rperm:[{

    }],
    _acl:[{

    }],
    _updated_at: {
        type:Date
    },
   _perishable_token:{

   }
}); 

UserSchema.statics.getUserbyName = async function(name){
    try{
        var user = await User.findOne({
            'name': name
        });
        return user;
    }catch(e){
        return 'User not found';
    } 
}

var User = mongoose.model('User', UserSchema, '_User', {strict: false});



module.exports = {User};