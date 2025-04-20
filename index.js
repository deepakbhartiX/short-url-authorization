

//STATEFULL AUTHENTICATION ON NODE JS


const express = require( "express");
const cookieParser = require('cookie-parser')

const {connectTOMonoDB} = require( "./connect.js")
const {URL} = require ('./models/url.js')
const path = require('path')
const PORT = 8001
const app = express();


const {router} = require( "./routes/url.js")
const {staticRouter} = require("./routes/staticRouter.js")
const signuprouter = require("./routes/users.js")
const {restictTO,checkauth} = require('./middleware/auth.js')

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())


app.use(checkauth);

// console.log(path.resolve("./views"));

connectTOMonoDB('mongodb://localhost:27017/short-url').then(()=>{
console.log("Conned to DB");
})


 //,restrictToLoggedinUserOnly not using because we have make mindetry to login before access home thus we done't need this

app.use("/url",restictTO(["NORMAL","ADMIN"]),router);

app.use("/",staticRouter,signuprouter)


// app.use('/user',signuprouter)

// app.get('/',async(req,res)=>{
//     const results = await URL.find({});

//      return res.render('home',{url:results})

//     res.end(
//         `<html>
//         <head></head>
//         <body>
//         <ol>
//         ${results.map(url =>`<li>${url.shortid} - ${url.redirectURL} -  ${url.vistHistory.length}</li>`).join('')}
//         </ol>
//         </body>
//         </html>`
//     )
// })

app.listen(PORT,()=>console.log(`port running on ${PORT}`))


