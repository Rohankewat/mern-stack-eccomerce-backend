var mongoose = require("mongoose");

var schema = mongoose.Schema;
var Data = new schema({
    id:{
        type:Number
    },
    category:{
        type:Number
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
    collection:"popular"
})

module.exports = mongoose.model("popular",Data);