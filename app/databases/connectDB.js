var mysql = require('mysql');

var connection = new mysql.createConnection({
    host: '103.253.147.116',
    user: 'sonkk',
    port: '3306',
    password: 'Sonkk@123',
    database: 'Do_An_Chuyen_Nganh_A',
    charset: 'utf8_general_ci'
});

connection.connect(function (err) {
    if (err) { console.log("Connect Database Fail !!!" + err) }
});

module.exports = connection;