const mongoose = require('mongoose');
const mainItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        default:true
    },
    taste:{
        type:String,
        enum:['sour', 'spicy', 'sweet'],
        required:true
    },
    ingridient:{
        type:[String],
        default:[]
    }
})
const MainItem = mongoose.model('MainItem', mainItemSchema);
module.exports = {MainItem};