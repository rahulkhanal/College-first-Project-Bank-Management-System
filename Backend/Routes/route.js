const express = require("express");
const officeTime = require("../Controller/officeTime");
// const AuthController = require("../auth/auth");
const path = require("path");
const { login } = require("../Controller/login");
const autthentication = require("../middlewares/autthentication");
const authorization = require("../middlewares/authorization");
const { createAccount, viewAccount, deleteAccount, searchAccount, updateAccount } = require("../Model/Account");
const router = express.Router();
const { createProjectLayer, deleteProjectLayer, updateProjectLayer } = require("../Controller/projectLayer");
const { readProject } = require("../Model/project");
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
router.get("/createproject", (req,resp)=>{
resp.render("createProject.hbs")
})
router.get("/project", readProject,(req,resp)=>{
  resp.render("project.hbs")
  })

//post
router.post("/api/register", createAccount);


//delete
router.delete("/api/register/:id", deleteAccount);

//post method
router.post("/login", login);
router.post("/storeTime", officeTime);

//PUT method
router.put("/api/updateAccount/:id", updateAccount)
module.exports = router;
 
router.delete("/project/:id", deleteProjectLayer)
router.get("/project",readProject)
router.post("/project", createProjectLayer)
router.put("/project/:id", updateProjectLayer)