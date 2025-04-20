
const {URL} = require ('../models/url.js')
const shortids = require("shortid");



async function handleGetUser (req,res) {
    const paramid = req.params.shortid
    const entry = await URL.findOneAndUpdate({shortid:paramid},
        {$push:{
        vistHistory:{
            timestamp:Date.now()
        } 

    }}
    );

    // if(!entry){
    //     return res.status(400).json({error:"URL not found in batabase"})
    // };

   
    console.log((entry.redirectURL));
     res.redirect(entry.redirectURL)
    
    
}


async function handleGenerateNewShrotURL(req,res){
     const shortidv = shortids(8);
     const body = req.body;
     if(!body.url) return res.status(400).json({error:"url is required"})
        

     await URL.create({

        shortid:shortidv,
        redirectURL:body.url,
        visitHistory:[],
        createdBy:req.user._id,
     });

     return res.render("home",{
        id:shortidv,
     });

}

module.exports = {handleGenerateNewShrotURL,handleGetUser}