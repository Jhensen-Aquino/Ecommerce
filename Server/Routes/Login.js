var express = require("express");
const login = express();

login.post("/login", function(req,res){
    console.log(req.body);
    var obj = {
        error: false,
        success: true,
        data: "Login Route executed",
        body: req.body
    }

    res.status(201).json(obj);
});

login.get("/getData", function(req,res){
    res.status(201).json("Get Method executed");
})

module.exports = login;