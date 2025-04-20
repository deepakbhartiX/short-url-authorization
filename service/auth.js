//FOR STAELESS AUTH

const jwt = require('jsonwebtoken')
const secret = "echo@123";


function setUser(user){

   payload = {_id:user._id,
   email:user.email,
  role:user.role,
  }
   
 return jwt.sign(payload,secret);
}

function getUser(token){
  if(!token) return null;
  return  jwt.verify(token,secret)
//   try {
//     return  jwt.verify(token,secret)
// }

//    catch (error) {
//      return null
//   }
}

module.exports = {
    setUser,
    getUser
}


//FOR STATEFULL AUTH


// const sessionToUserMap = new Map();

// function setUser(id,user){

//     sessionToUserMap.set(id,user)
// }

// function getUser(id){
//   return  sessionToUserMap.get(id);
// }


// module.exports = {
//     setUser,
//     getUser
// }