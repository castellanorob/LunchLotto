// Set up MySQL connection.
var mysql = require("mysql");
var Sequelize = require("sequelize");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = new Sequelize("lunch_db", "root", "mySQL", {
      host: "localhost",
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
