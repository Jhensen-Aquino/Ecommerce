var mysql = require('mysql');

var connection = mysql.createPool({
    host: "remotemysql.com",
    user: "B6eM4SFuuQ",
    password: "UcH5YPdH95",
    database: "B6eM4SFuuQ",
    port: 3306
})

module.exports.connection = connection;