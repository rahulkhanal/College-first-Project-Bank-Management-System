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
  
