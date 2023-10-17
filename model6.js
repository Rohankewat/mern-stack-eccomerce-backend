var mongoose = require("mongoose");

var schema = mongoose.Schema;

var Data6 = new schema({
    id:{
        type:Number
    },
    name:{
        type:String
    },
    price:{
        type:Number
    },
    qty:{
        type:Number
    },
    url:{
        type:String
    }
},{
    collection:'cart'
})

module.exports = mongoose.model("cart",Data6)