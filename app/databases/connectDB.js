var mysql = require('mysql');

var connection = new mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'DoAnNganhA',
    database: 'Do_An_Chuyen_Nganh_A'
});

connection.connect(function(err){
    if (err) {console.log("Connect Database Fail !!!");}
});

module.exports = connection;