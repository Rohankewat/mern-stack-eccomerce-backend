var mongoose = require("mongoose");

var schema = mongoose.Schema;

var Login = new schema({
    uid:{
        type:Number
    },
    upass:{
        type:String
    },
    uemail:{
        type:String
    }
},{
    collection:'login'
})

module.exports = mongoose.model('login',Login);