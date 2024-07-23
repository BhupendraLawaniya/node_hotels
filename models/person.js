const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        require:true
    },
    work:{
        type:String,
        enum:['chef','waiter','cook'],
        require:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }

});
//create person model
const Person = mongoose.model('Person', personSchema);
module.exports = {Person};