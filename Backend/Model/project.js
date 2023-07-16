const connection = require("../Database/database");
module.exports = {
    insertProject: (insertProject = (req, resp) => {
      const { name, start_date, end_date, department } = req.body;
      
      connection.query(
        "insert into Project(Name,Start_date,End_date,Department)VALUES(?,?,?,?)",
        [name, start_date, end_date, department],
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
  
    updateProject: (updateProject = (req, resp) => {
      const { name, start_date, end_date, department } = req.body;
      const { id } = req.params.id;
      connection.query(
        "UPDATE Project SET Name=?,Start_date=?, End_date=?, Department=? WHERE Id=?",[
          name, start_date, end_date, department, id
        ],
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
      const { name, start_date, end_date, department } = req.body;
      const { id } = req.params.id;
      connection.query("DELETE FROM Project WHERE id=? ", [id], (err, res) => {
        if (err) {
          throw err;
        } else {
          console.log("saira");
          resp.status(200).json({
            msg: res,
          });
        }
      });
    }),
    readProject: (readProject = (req, resp) => {
      
      connection.query("SELECT * FROM Project ", (err, res) => {
        if (err) {
          throw err;
        } else {
             console.log(res);
            resp.render("project", { data: res });
        }
      });
    }),
  
  };
  
