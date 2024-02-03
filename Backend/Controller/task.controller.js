const connection = require("../Database/database");
module.exports = {
  insertTask: (req, resp) => {
    const taskName = req.body.fName;
    const deadline = req.body.mName;
    const department = req.body.department;
    const project = req.body.project;
    const sql =
      "INSERT INTO tasks (task_name, deadline, department, project) VALUES (?, ?, ?, ?)";
    const values = [taskName, deadline, department, project];
    console.log(values);
    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        resp.status(500).send("Internal Server Error");
        return;
      }
      resp.redirect("/createTask");
    });
  },
  getTask: () => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM tasks";
      connection.query(sql, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  deleteTask: (req, resp) => {
    return new Promise((resolve, reject) => {
      try {
        const taskId = req.params.id;
        const sql = "DELETE FROM tasks WHERE id = ?";
        connection.query(sql, [taskId], (err, res) => {
          if (err) {
            throw err;
          } else {
            resp.status(200).json({
              msg: res,
            });
          }
        });
      } catch (error) {
        console.log(error.messsage);
      }
    });
  },
};
