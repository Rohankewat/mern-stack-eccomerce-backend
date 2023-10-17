var mongoose = require("mongoose");

var schema = mongoose.Schema;
var Data1 = new schema({
    id:{
        type:Number
    },
    qty:{
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
    },
    category:{
        type:String
    }
},{
    collection:"details"
})

module.exports = mongoose.model("details",Data1);