module.exports = authorization = (...roles) => {
  try {
    return (req, resp, next) => {
      const role = JSON.parse(req.cookies.credintial)[0].Role;
      // console.log(roles.includes(role));
      if (roles.includes(role)) {
        next();
      } else {
        resp.redirect("/");
      }
    };
  } catch (error) {
    console.log(error.message);
  }
};
