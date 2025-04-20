const mongoose= require ("mongoose");

async function connectTOMonoDB(url) {
    return mongoose.connect(url);
}

module.exports= {
    connectTOMonoDB
}