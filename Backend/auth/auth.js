const con = require("../Database/database");

module.exports = Authorization = (...role) => {
  return (req, resp, next) => {
    const { email, password } = req.body;
    console.log(role);
    const query = `SELECT * FROM user WHERE Email=? AND Password=?`;
    con.query(query, [email, password], (err, res) => {
      if (err) {
        console.error("Error storing times in the database: ", err);
      } else if (res.length == 0) {
        console.log("No user found");
      } else if (!role.includes(res[0].Role)) {
        console.log("Unathorized page");
      } else {
        next();
      }
    });
  };
};
