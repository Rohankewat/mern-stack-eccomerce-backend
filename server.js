var express = require("express");
var app = express();
const PORT = 6040;
var config = require("./DB");
var DetRoute = require("./routing");
const bodyparser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use("/book",DetRoute);
var mongoose = require("mongoose");
mongoose.connect(config.DB,{
    useNewUrlParser:true
}).then(()=> {
    console.log("Database is connected "+config.DB);
}).catch(err => {
    console.log("Database is not connected "+err);
})

app.listen(PORT,()=> {
    console.log("Server is runing on PORT "+PORT);
})