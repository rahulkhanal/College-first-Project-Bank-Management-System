module.exports = authenticate = (req, resp, next) => {
  const cookieDta = JSON.parse(req.cookies.credintial);
  // console.log(cookieDta);
  if (cookieDta[0].Email && cookieDta[0].Password) {
    next();
  } else {
    resp.redirect("/");
  }
};
