const con = require("../Database/database");

module.exports = {
  createAccount: (req, resp) => {
    const { name, contact, email, department, role, password } = req.body;
    con.query("SELECT Email FROM user WHERE Email = ?", email, (err, res) => {
      if (err) {
        throw err;
      } else {
        if (res.length > 0) {
          resp.render("createUser", { msg: true });
        } else {
          con.query(
            "INSERT INTO user(Name, Email, Password, Contact, Department, Role) VALUES(?,?,?,?,?,?)",
            [name, email, password, contact, department, role],
            (err, res) => {
              if (err) {
                throw err;
              } else {
                console.log(res);
              }
            }
          );
        }
      }
    });
  },
  viewAccount: (req, resp) => {
    con.query("SELECT * FROM user", (err, res) => {
      if (err) {
        throw err;
      } else {
        resp.render("user", { data: res });
      }
    });
  },
  deleteAccount: (req, resp) => {
    const id = req.params.id;
    con.query("DELETE FROM user WHERE Id = ?", [id], (err, res) => {
      if (err) {
        throw err;
      } else {
        resp.render("user", { data: res });
      }
    });
  },
  searchAccount: (req, resp) => {
    const id = req.params.id;
    con.query("SELECT * FROM user WHERE Id = ?", [id], (err, res) => {
      if (err) {
        throw err;
      } else {
        if (res.length > 0) {
          resp.render("updateUser", { data: res[0], id:id });
        }
      }
    });
  },
};
