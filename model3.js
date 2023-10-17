var mongoose = require("mongoose");

var schema = mongoose.Schema;
var Data3 = new schema({
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
    collection:"earbud"
})

module.exports = mongoose.model("earbud",Data3);