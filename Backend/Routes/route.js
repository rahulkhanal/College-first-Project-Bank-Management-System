const express = require("express");
const officeTime = require("../Controller/officeTime");
// const AuthController = require("../auth/auth");
const path = require("path");
const { login } = require("../Controller/login");
const authentication = require("../middlewares/autthentication");
const authorization = require("../middlewares/authorization");
const {
  createAccount,
  viewAccount,
  deleteAccount,
  searchAccount,
  updateAccount,
} = require("../Model/Account");
const router = express.Router();
const {
  createProjectLayer,
  deleteProjectLayer,
  updateProjectLayer,
} = require("../Controller/projectLayer");
const {
  readProject,
  deleteProject,
  searchProject,
} = require("../Model/project");
const getProjectController = require("../Controller/project.controller");
//all the file

router.get("/", (req, res) => {
  res.render("index.hbs");
});
router.get(
  "/home",
  authentication,
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
router.get("/updateUser/:id", searchAccount, (req, resp) => {
  resp.render("updateUser.hbs");
});
router.get("/createproject", (req, resp) => {
  resp.render("createProject.hbs");
});
router.get("/project", readProject, (req, resp) => {
  resp.render("project.hbs");
});
router.get("/updateproject/:id", searchProject, (req, resp) => {
  resp.render("updateProject.hbs");
});

//Task work
router.get("/createTask", async (req, resp) => {
  const result = await getProjectController();
  resp.render("createTask.hbs", { result });
});
//post
router.post("/api/register", createAccount);

//delete
router.delete("/api/register/:id", deleteAccount);

//post method
router.post("/login", login);
router.post("/storeTime", officeTime);

//PUT method
router.put("/api/updateAccount/:id", updateAccount);

router.delete("/project/:id", deleteProject);
router.get("/project", readProject);
router.post("/project", createProjectLayer);
router.put("/project/:id", updateProjectLayer);

module.exports = router;
