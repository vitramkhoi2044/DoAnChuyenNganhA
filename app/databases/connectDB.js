var mysql = require('mysql');

var connection = new mysql.createConnection({
    host: '10.104.0.3',
    user: 'admin',
    port: '3306',
    password: 'DoAnNganhA-1',
    database: 'Do_An_Chuyen_Nganh_A',
    charset : 'utf8_general_ci'
});

connection.connect(function(err){
    if (err) {console.log("Connect Database Fail !!!"+err)}
});

module.exports = connection;