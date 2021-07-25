const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1qaz@WSX",
	database: "sp",
});

connection.connect((err) => {
	if (err) throw err;
	console.log("Connected");
});

module.exports = connection;
