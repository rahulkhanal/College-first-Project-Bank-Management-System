const { Authorization } = require("../Model/auth");

const login = (req, resp) => {
  const data = req.body;
  Authorization(data, async (err, result) => {
    if (err) {
      return resp.status(404).json({
        success: false,
        msg: err.message,
      });
    } else {
      await resp.cookie("email", data.email, {
        maxAge: 1000000,
        httpOnly: true,
      });
      await resp.cookie("password", data.password, {
        maxAge: 1000000,
        httpOnly: true,
      });
      // await resp.status(200).json({
      //   success: true,
      //   data: result,
      // });
      await resp.redirect("/Home");
    }
  });
};

module.exports = { login };
