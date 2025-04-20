const express= require('express')
const {handleGenerateNewShrotURL,handleGetUser} = require('../controllers/url')

const router = express.Router()

router.post("/",handleGenerateNewShrotURL);
router.get("/:shortid",handleGetUser)


 

module.exports = {router};