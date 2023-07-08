const con = require("../Database/database");

module.exports = {
  createAccount: (req, resp) => {
    const { name, contact, email, department, role, password } = req.body;
    con.query(
      "INSERT INTO user(Name, Email, Password, Contact, Department, Role) VALUES(?,?,?,?,?,?)",
      [name, email, password, contact, department, role],
      (err, res)=>{
        if(err){
          throw err;
        }else{
          console.log(res);
        }
      }
    );
  },
};
