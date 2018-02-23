const mysql = require('mysql');
const dbConfig = {
	host : 'localhost',
	port : 3306,
	user : 'root',
	password : 'qqqq',
	database : 'test',
	connectionLimit : 10
};

module.exports = mysql.createPool(dbConfig);