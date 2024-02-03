const con = require("../Database/database");

module.exports = AuthController = (req, resp) => {
  const { startTime, endTime } = req.body;
    console.log("object");
    const query = `INSERT INTO officetime (startTime, endTime) VALUES (?, ?)`;
    con.query(query, [startTime, endTime], (err, res) => {
      if (err) {
        console.error("Error storing times in the database: ", err);
      } else {
        console.log("Times stored successfully");
      }
    });
};