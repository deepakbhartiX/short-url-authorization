const express = require("express");
const staticRouter = express.Router();
const { URL } = require("../models/url")
const { restictTO } = require("../middleware/auth")

staticRouter.get('/admin',restictTO(["ADMIN","NORMAL"]), async (req, res) => {
    
     
     
     const allURL = await URL.find({}).populate('createdBy','username');

     // console.log(allURL[1].createdBy.username);


     // console.log(allURL[1]._id)

     return res.render("home", {
          urls: allURL,
          // username:req.user.username,

     });
})




staticRouter.get('/', restictTO(["NORMAL","ADMIN"]), async (req, res) => {


     const allURL = await URL.find({ createdBy: req.user._id })

     

     return res.render("home", {
          urls: allURL,

     });
})

staticRouter.get('/signup', (req, res) => {
     return res.render("signup")
})


staticRouter.get('/login', (req, res) => {
     return res.render("login")
})
module.exports = { staticRouter };



