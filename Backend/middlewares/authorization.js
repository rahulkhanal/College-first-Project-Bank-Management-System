module.exports = authorization = (...roles) => {
  return (req, resp, next) => {
    const role = JSON.parse(req.cookies.credintial)[0].Role;
    // console.log(role);
    if (roles.includes(role)) {
      next();
    }else{
        resp.redirect("/")
    }
  };
};
