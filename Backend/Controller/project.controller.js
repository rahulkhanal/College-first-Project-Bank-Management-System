// database.js
const connection = require("../Database/database");

function getProjectController() {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM project WHERE status = ?",
      [0],
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
}

module.exports = getProjectController;
