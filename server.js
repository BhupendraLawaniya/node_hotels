const express = require('express');
const app = express();
const db  = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//import routes 

const personRoutes = require('./routes/personRoutes');
const mainItemRoutes = require('./routes/mainItemRoutes');
app.use(personRoutes, mainItemRoutes);

app.listen(5000, ()=>{
    console.log("server is running on port 5000");
});