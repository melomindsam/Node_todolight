//requiert et instancie le module mysql de NodeJS
var mysql = require('mysql');
var connection = mysql.createPool({
    host : 'localhost',
    user : 'todolistmoos', 
    password : 'a4esrgcq*',
    database : 'mytodo'
});

//Exporter la méthode connection
module.exports = connection;