module.exports = authenticate = (req, resp, next) => {
  //   console.log(req);
  if (req.cookies.email && req.cookies.password) {
    next();
  } else {
    resp.redirect("/");
  }
};
