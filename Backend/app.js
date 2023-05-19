const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const cors = require('cors'); // Import cors
const bodyParser = require('body-parser'); // Import body-parser



//Middleware
app.use(cors()); 
// Add body-parser middleware
app.use(bodyParser.json());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tms',
});

// Connect to the MySQL server
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database: ', error);
  } else {
    console.log('Connected to MySQL server!');
  }
});

// Handle POST request to store startTime and endTime
app.post('/storeData', (req, res) => {
  const { startTime, endTime } = req.body;
  console.log(req.body);

  // Insert startTime and endTime into the database
  const query = `INSERT INTO officetime (startTime, endTime) VALUES (?, ?)`;
  connection.query(query, [startTime, endTime], (error, results) => {
    if (error) {
      console.error('Error storing times in the database: ', error);
      res.status(500).send('Error storing times in the database');
    } else {
      res.status(200).send('Times stored successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
