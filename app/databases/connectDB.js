var mysql = require('mysql');

var connection = new mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'do_an_chuyen_nganh_a'
});

connection.connect(function(err){
    if (err) {console.log("Connect Database Fail !!!");}
});

module.exports = connection;