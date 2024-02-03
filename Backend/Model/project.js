const connection = require("../Database/database");
module.exports = {
  insertProject: (insertProject = (req, resp) => {
    const { name, start_date, end_date } = req.body;

    connection.query(
      "insert into Project(Name,Start_date,End_date)VALUES(?,?,?)",
      [name, start_date, end_date],
      (err, res) => {
        if (err) {
          resp.status(500).json({ message: "Invalid request" });
        } else {
          resp.status(200).json({ message: "Successfully created a project" });
        }
      }
    );
  }),

  searchProject: (req, resp) => {
    const id = req.params.id;
    connection.query("SELECT * FROM Project WHERE Id = ?", [id], (err, res) => {
      if (err) {
        throw err;
      } else {
        if (res.length > 0) {
          resp.render("updateProject", { data: res[0], id: id });
        }
      }
    });
  },

  updateProject: (updateProject = (req, resp) => {
    const { name, start_date, end_date, department } = req.body;
    const { id } = req.params;
    connection.query(
      "UPDATE Project SET Name=?,Start_date=?, End_date=?, Department=? WHERE Id=?",
      [name, start_date, end_date, department, id],
      (err, res) => {
        if (err) {
          resp.json({
            status: 500,
            msg: err,
          });
        } else {
          resp.json({
            status: 200,
            msg: res,
          });
        }
      }
    );
  }),

  deleteProject: (deleteProject = (req, resp) => {
    const { id } = req.params;
    console.log(req.params);
    connection.query("DELETE FROM Project WHERE Id=? ", [id], (err, res) => {
      if (err) {
        throw err;
      } else {
        resp.status(200).json({
          msg: res,
        });
      }
    });
  }),
  readProject: (readProject = (req, resp) => {
    const role = JSON.parse(req.cookies.credintial)[0].Role;

    const isAdmin = role && role === "admin";

    connection.query("SELECT * FROM Project ", (err, res) => {
      if (err) {
        throw err;
      } else {
        const data = res.map((item) => ({
          ...item,
          showBtn: isAdmin,
        }));

        resp.render("project", { data, isAdmin });
        // resp.render("project", { data: { ...res, showBtn: isAdmin }, isAdmin });
      }
    });
  }),
};
