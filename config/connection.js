var mysql = require('mysql');

module.exports = mysql.createConnection({
    host: "localhost",
    port: 3307,
    database: "burgers_db",
    user: "root",
    password: "root"
});