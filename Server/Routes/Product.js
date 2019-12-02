var express = require("express");
const saveProduct = express();

saveProduct.post("/saveproduct", function(req,res){
    console.log(req.body);
    var obj = {
        error: false,
        success: true,
        data: "Save Route executed",
        body: req.body
    }

    res.status(201).json(obj);
});

saveProduct.get("/getData", function(req,res){
    res.status(201).json("Get Method executed");
})

module.exports = saveProduct;