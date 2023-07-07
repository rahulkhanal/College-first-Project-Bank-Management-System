module.exports = authorization = (...roles) => {
  try {
    return (req, resp, next) => {
      const role = JSON.parse(req.cookies.credintial)[0].Role;
      if (roles.includes(role)) {
        next();
      } else {
        resp.redirect("/");
      }
    };
  } catch (error) {
    console.log("authorization error");
    console.log(error.message);
  }
};
