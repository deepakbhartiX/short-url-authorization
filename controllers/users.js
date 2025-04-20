const Users = require ('../models/users')
const {v4:uuidv4} = require('uuid')
const {setUser} = require("../service/auth")
 


async function signupauth (req,res){

         const {username,email,password} = req.body;

        const signup = await Users.create({
          username,
          email,
          password,

        })





        // FOR SATELESS AUTH USING RES IN HEADER 

        const token = setUser(signup);
        res.cookie("token",token);
         return res.redirect("/");




        //FOR STATELESS AUTH USING COOKIES

      //   const token = setUser(signup);
      // res.cookie("uid",token);
      // return res.redirect("/")



        //FOR STATEFULL AUTH
        // const sessionid = uuidv4();
        // setUser(sessionid,signup);
        // res.cookie("uid",sessionid);

        // return res.redirect("/")
    
}



async function loginauth (req,res){
    const {email,password} = req.body;

    const loginvalidate = await Users.findOne({
      
       email,
       password, 
    })

    // console.log(loginvalidate)

    if(!loginvalidate)return res.render("login",{
      error: "Invalid Username or Password"
    })

    

 


    //USING STATELESS AUTH USING HEADER AUTH

    const token = setUser(loginvalidate);
    res.cookie("token",token);
    return res.redirect("/");





    //FOR STATELESS AUTH USING COOKIES
    
    // const token = setUser(loginvalidate);
    // res.cookie("uid",token);
    // return res.redirect("/")




//    FOR STATEFULL AUTH
    // const sessionid = uuidv4();
    // setUser(sessionid,loginvalidate);
    // res.cookie("uid",sessionid);
    // return res.redirect("/")



}

module.exports = {signupauth,loginauth} ;


