const con = require("../Database/database");

module.exports = officeTime = (req, resp) => {
  const { startTime, endTime } = req.body;
  console.log(startTime);
  console.log(endTime);
    const query = `INSERT INTO officetime (startTime, endTime) VALUES (?, ?)`;
    con.query(query, [startTime, endTime], (err, res) => {
      if (err) {
        console.error("Error storing times in the database: ", err);
      } else {
        console.log("Times stored successfully");
      }
    });
};