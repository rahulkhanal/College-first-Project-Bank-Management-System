const { checkAuth } = require("../Model/auth");

const login = (req, resp) => {
  const data = req.body;
  checkAuth(data, async (err, result) => {
    if (err) {
      return resp.status(404).json({
        success: false,
        msg: err.message,
      });
    } else {
      await resp.cookie("credintial", JSON.stringify(result));
      await resp.redirect("/Home");
    }
  });
};

const logout = (req, resp) => {
  resp.clearCookie("credential");
};
module.exports = { login };

// await resp.cookie("email", data.email, {
//   maxAge: 1000000,
//   httpOnly: true,
// });
// await resp.cookie("password", data.password, {
//   maxAge: 1000000,
//   httpOnly: true,
// });
