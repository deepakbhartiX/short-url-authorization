const { getUser } = require('../service/auth')


function checkauth(req, res, next) {

    // const authorizationHeadervalue = req.headers.authorization;

    const authorizationHeadervalue = req.cookies.token;


    req.user = null;

    if (!authorizationHeadervalue )
        return next();


    // const token = authorizationHeadervalue.split("Bearer ")[1];



    const user = getUser(authorizationHeadervalue);
   
    req.user = user;

    next();






}

function restictTO(roles = []){
    return function(req,res,next){

        if(!req.user) return res.redirect("/login");
        if(!roles.includes(req.user.role)) return res.send("UnAuthorized");

        return next();

    }
}
module.exports = {
    checkauth,restictTO
}