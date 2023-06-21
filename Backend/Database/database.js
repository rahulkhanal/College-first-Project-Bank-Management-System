const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tmsproject",
});

// Connect to the MySQL server
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database: ", error);
  } else {
    console.log("Connected to MySQL server!");
  }
});


module.exports = connection;