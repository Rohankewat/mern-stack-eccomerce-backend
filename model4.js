var mongoose = require("mongoose");

var schema = mongoose.Schema;

var Data4 = new schema({
    id:{
        type:Number
    },
    category:{
        type:String
    },
    name:{
        type:String
    },
    price:{
        type:Number
    },
    rating:{
        type:Number
    },
    disc:{
        type:String
    },
    url:{
        type:String
    }
},{
    collection:'watches'
})

module.exports = mongoose.model("watches",Data4);