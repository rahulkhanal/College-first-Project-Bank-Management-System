module.exports = authenticate = (req, resp, next) => {
  try {
    const cookieDta = JSON.parse(req.cookies.credintial);
    console.log("coookieeeeeeeeeee",cookieDta);
    if (cookieDta[0].Email && cookieDta[0].Password) {
      next();
    } else {
      resp.redirect("/");
      resp.end();
    }
  } catch (err) {
    resp.redirect("/");
    console.log(err.message);
  }
};
