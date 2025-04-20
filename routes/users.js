const {signupauth,loginauth}  = require('../controllers/users')
const express = require('express')

const signuprouter = express.Router();


signuprouter.post('/signup',signupauth);
signuprouter.post('/login',loginauth);


// signuprouter.post('/user',)

module.exports = signuprouter
