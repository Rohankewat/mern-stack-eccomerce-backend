var mongoose = require("mongoose");

var schema = mongoose.Schema;
var Data2 = new schema({
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
    collection:"headphone"
})

module.exports = mongoose.model("headphone",Data2);