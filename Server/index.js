const express = require("express");
const bodyParse = require("body-parser");

const app = express();

app.use(bodyParse.json({ limit: "50mb", extended: true }));
app.use(bodyParse.urlencoded({ limit: "50mb", extended: true }));

app.use(function(req,res, next){
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");

    //Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    //Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    //Set to true if you need the website to include cookies in the requests sent to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
    //Pass to next layer of Middleware
    next();
})
var login = require("./Routes/Login");
app.use("/api", login);
var server = app.listen(5003, function() {
    console.log("Server Started");
})