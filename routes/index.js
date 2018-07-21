var express = require('express');
var router = express.Router();
//My Modules

var _ = require('lodash');
//Models
var {User} = require('../models/User.js'); 
var {Planet} = require('../models/Planet.js'); 
var {City} = require('../models/City.js'); 
  
router.get('/test', async function(req, res, next) {
    try{
        var cities = await City.find({}, '_id _p_planet name');
        var planets = await Planet.find({}, '_id:0 name');
        
        var data = [cities, planets];
        
        res.status(200).send(data); 
    }catch(e){
        res.status(401).send(e);
    }
});  

router.get('/', function(req, res, next) {
    res.render('index');
}); 

/******************Auth**************************/
/* GET Login*/
router.get('/login', function(req, res, next) {
  res.render('auth/login');
});

/* POST Login*/
router.get('/login', function(req, res, next) {
    //login use and give them a token.
  });

/* GET Register*/
router.get('/register', function(req, res, next) {
    res.render('auth/register');
  });

/* POST Register*/
router.post('/register',async function(req, res, next) {

    try{
        var body = _.pick(req.body, ['email','passowrd','name', 'username', 'planet', 'city', 'starport']);
        var user = new User(body);
        
        await user.save;

        res.status(200).send(user); 
        
    }catch(e){
        res.status(401).send(e);
    }
    
});

/* GET underconstruction*/
router.get('/underconstruction', function(req, res, next){
    res.render('underconstruction');
});

/* GET profile-setup*/
router.get('/profile-setup', function(req, res, next){
    res.render('profile/profile-setup');
});
/* GET graphic-novel*/
router.get('/graphic-novel', function(req, res, next){
    res.render('graphic-novel');
});
/* GET contract*/
router.get('/contract', function(req, res, next){
    res.render('contract');
});
/* GET contact*/
router.get('/contact', function(req, res, next){
    res.render('contact');
});
/* GET shop*/
router.get('/shop', function(req, res, next){ 
    res.render('shop/welcome');
});

/****************** Home Videos **************************/
router.get('/videos/1', function(req, res, next) {
    res.render('videos/video-1');
});
router.get('/videos/2', function(req, res, next) {
    res.render('videos/video-2');
});


/****************** WORLDS **************************/
router.get('/worlds/arango', function(req, res, next) {
    res.render('worlds/arango');
});
router.get('/worlds/bannoo', function(req, res, next) {
    res.render('worlds/bannoo');
});
router.get('/worlds/chupanzi', function(req, res, next) {
    res.render('worlds/chupanzi');
});
router.get('/worlds/devo', function(req, res, next) {
    res.render('worlds/devo');
});
router.get('/worlds/erax', function(req, res, next) {
    res.render('worlds/erax');
});
router.get('/worlds/fodo', function(req, res, next) {
    res.render('worlds/fodo');
});


module.exports = router;
