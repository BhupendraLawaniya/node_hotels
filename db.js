const mongoose = require('mongoose');
//define mongodb connection url
const mongodb = 'mongodb://localhost:27017/hotels';
//create connection
mongoose.connect(mongodb,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

//access default connection object
const db = mongoose.connection;

//define event listeners
db.on('connected',()=>{
    console.log("server is successfully connected to mongodb");
   

})
db.on('disconnected',()=>{
    console.log("server is  disconnected to mongodb");
   

})
db.on('error',()=>{
    console.log("server shows error");

})

module.exports = {db};

