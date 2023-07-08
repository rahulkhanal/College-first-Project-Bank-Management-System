const express = require("express");
const officeTime = require("../Controller/officeTime");
// const AuthController = require("../auth/auth");
const path = require("path");
const { login } = require("../Controller/login");
const autthentication = require("../middlewares/autthentication");
const authorization = require("../middlewares/authorization");
const { createAccount, viewAccount, deleteAccount, searchAccount } = require("../Model/Account");
const router = express.Router();
//all the file

router.get("/", (req, res) => {
  res.render("index.hbs");
});
router.get(
  "/home",
  autthentication,
  authorization("admin", "user"),
  (req, res) => {
    res.render("Home");
  }
);
router.get("/createUser", (req, res) => {
  res.render("createUser");
});
router.get("/user", viewAccount, (req, res) => {
  res.render("user");
});
router.get("/updateUser/:id", searchAccount, (req,resp)=>{
  resp.render("updateUser.hbs")
})

//post
router.post("/api/register", createAccount);


//delete
router.delete("/api/register/:id", deleteAccount);

//post method
router.post("/login", login);
router.post("/storeTime", officeTime);
module.exports = router;
