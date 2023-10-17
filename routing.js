var express = require("express");
var mongoose = require("mongoose");
var Routes = express.Router();
var Data = require("./model");
var Data1 = require("./model1");
var Data2 = require("./model2");
var Data3 = require("./model3");
var Data4 = require("./model4");
var Data5 = require("./model5");
var Data6 = require("./model6");
var Login = require("./model7");

Routes.route("/popular").get((req,res)=> {
    Data.find().then(details => {
        res.status(200).json(details)
    }).catch(
        err => res.status(400).send("Data not found "+err)
    )
})

Routes.route("/details").get((req,res)=> {
    Data1.find().then((details)=> {
        res.status(200).json(details)
    }).catch(
        err => res.status(400).send("Data not found "+err)
    )
})

Routes.route("/headphone").get((req,res)=> {
    Data2.find().then((details)=> {
        res.status(200).json(details)
    }).catch(
        err => res.status(400).send("Data not found "+err)
    )
})

Routes.route("/earbud").get((req,res)=> {
    Data3.find().then((details)=> {
        res.status(200).json(details)
    }).catch(
        err => res.status(400).send("Data not found "+err)
    )
})

Routes.route("/watch").get((req,res)=> {
    Data4.find().then(details => {
        res.status(200).json(details)
    }).catch(
        err => res.status(400).send("Data not found "+err)
    )
})

Routes.route("/smartphone").get((req,res)=> {
    Data5.find().then(details => {
        res.status(200).json(details)
    }).catch(
        err => res.status(400).send("Data not found "+err)    
        )
})


Routes.route("/addtocart").get((req,res)=> {
    Data6.find().then(details => {
            if(details.length == 0) {
                var data = new Data6(req.query);
                data.save().then(data1 => {
                    res.send(data1)
                })
            }
            else {
                var c = 0;
                for(var i=0; i<details.length; i++) {
                    if(details[i].id != req.query.id) {
                        c++;
                        if(c == details.length) {
                            var data = new Data6(req.query);
                            data.save().then(data1 => {
                                res.send(data1)
                            })
                        }
                    }
                }
            }
          
        }
    )
    })


Routes.route("/showcart").get((req,res)=> {
    Data6.find().then(details => {
        res.status(200).json(details)
    }).catch(
        err => res.status(400).send("unable to show data "+err)
    )
})

// Routes.route("/deletecart/:id").get((req,res)=> {
//     var found = false;
//     var id = parseInt(req.params.id);
//     Data6.find().then(details => {
//         for(var i=0; i<details.length; i++) {
//             if(details[i].id === id) {
//                 found = true;
//                 Data6.deleteOne({id:req.params.id}).then(()=> {
//                     res.status(200).json("Data deleted")
//                 }).catch(
//                     err => res.status(400).json("unable to delete data "+err)
//                 )
//             }
//         }
//         if(found == false) {
//             res.status(400).json("Data deletetion failed");
//         }
//     })
// })

Routes.route("/deletecart/:id").get((req,res)=> {
    Data6.deleteOne({id:req.params.id}).then(()=> {
        res.status(200).send("Data deleted ")
    }).catch(
        err => res.status(400).send("Unable delete data "+err)
    )
})

Routes.route("/updatecart1/:id").get((req,res)=> {
    Data6.findOne({id:req.params.id}).then((detail) => {
        var qty = detail.qty;
        Data6.updateOne({id:req.params.id},{qty:qty+1}).then(()=> {
            res.status(200).send("Data updated ")
        }).catch(
            err => res.status(400).send("unable to update data "+err)
        )
    })
})

Routes.route("/updatecart2/:id").get((req,res)=> {
    Data6.findOne({id:req.params.id}).then((detail) => {
        var qty = detail.qty;
        if(qty>0) {
            Data6.updateOne({id:req.params.id},{qty:qty-1}).then(()=> {
                res.status(200).send("Data updated ")
            }).catch(
                err => res.status(400).send("unable to update data "+err)
            )
        }
        else {
            res.status(400).send("Qty is zero")
        }
        })
})

Routes.route("/savelogin").post((req,res)=> {
    var uid = req.body.uid;
    var upass = req.body.upass;
    var uemail = req.body.uemail;

    var login = new Login({uid:uid,upass:upass,uemail:uemail})
    login.save().then(()=> {
        res.status(200).send("Data saved")
    }).catch(
        err => res.status(400).send("unable to save data "+err)
    )
})

Routes.route("/showlogin").get((req,res)=> {
    Login.find().then(details => {
        res.status(200).json(details)
    }).catch(
        err => res.status(400).send("Unable to show data "+err)
    )
})

module.exports = Data;
module.exports = Routes;