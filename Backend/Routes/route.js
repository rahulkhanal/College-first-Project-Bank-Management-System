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
const { insertTask, getTask } = require("../Controller/task.controller");
//all the file

router.get("/", (req, res) => {
  res.render("index.hbs");
});
router.get(
  "/home",
  authentication,
  authorization("admin", "staff"),
  (req, res) => {
    const role = JSON.parse(req.cookies.credintial)[0].Role;
    const Name = JSON.parse(req.cookies.credintial)[0].Name;
    const isAdmin = role && role === "admin";
    console.log("isAdmin", isAdmin);
    res.render("Home", { isAdmin, Name });
  }
);
router.get("/createUser", authorization("admin"), (req, res) => {
  res.render("createUser");
});
router.get("/view-task", authorization("admin", "staff"), async (req, res) => {
  try {
    const tasks = await getTask();
    res.render("viewTask", { tasks });
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    res.status(500).send("Internal Server Error");
  }
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
router.post("/task", insertTask);
router.post("/storeTime", officeTime);
router.get("/leave", (req, res) => {
  res.clearCookie(req.cookies.credintial);
  console.log(req.cookies);
  // req.clearCookie("credintial");
});

//PUT method
router.put("/api/updateAccount/:id", updateAccount);
router.delete("/project/:id", deleteProject);
router.get("/project", readProject);
router.post("/project", createProjectLayer);
router.put("/project/:id", updateProjectLayer);

module.exports = router;
