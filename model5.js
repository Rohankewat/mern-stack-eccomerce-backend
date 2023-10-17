var mongoose = require("mongoose");

var schema = mongoose.Schema;

var Data5 = new schema({
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
    collection:'smartphone'
})

module.exports = mongoose.model("smartphone",Data5);