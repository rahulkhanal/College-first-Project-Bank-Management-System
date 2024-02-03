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
  updateProjectStatus,
} = require("../Model/project");
const getProjectController = require("../Controller/project.controller");
const {
  insertTask,
  getTask,
  deleteTask,
  updateTask,
  getTaskById,
  getTaskUI,
} = require("../Controller/task.controller");
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
router.get(
  "/createUser",
  authentication,
  authorization("admin"),
  async (req, res) => {
    const role = JSON.parse(req.cookies.credintial)[0].Role;
    const isAdmin = role && role === "admin";
    res.render("createUser", { isAdmin });
  }
);
router.get(
  "/view-task",
  authentication,
  authorization("admin", "staff"),
  async (req, res) => {
    try {
      const tasks = await getTask();
      res.render("viewTask", { tasks });
    } catch (error) {
      console.error("Error retrieving tasks:", error);
      res.status(500).send("Internal Server Error");
    }
  }
);
router.get(
  "/user",
  authentication,
  authorization("admin"),
  viewAccount
  // async (req, res) => {
  //   const role = JSON.parse(req.cookies.credintial)[0].Role;
  //   const isAdmin = role && role === "admin";
  //   console.log(isAdmin, "I am");
  //   const tasks = await getTask();
  //   res.render("user", { tasks, isAdmin });
  // }
);

router.get(
  "/update-task/:id",
  authentication,
  authorization("admin", "staff"),
  async (req, res) => {
    const taskId = req.params.id;
    try {
      const result = await getProjectController();
      getTaskById(taskId, (err, task) => {
        if (err) {
          console.error("Error getting task details:", err);
          res.status(500).send("Internal Server Error");
          return;
        }
        res.render("update-task", { task, result });
      });
    } catch (error) {
      console.error("Error in route:", error);
      res.status(500).send("Internal Server Error");
    }
  }
);
router.get(
  "/updateUser/:id",
  authentication,
  authorization("admin"),
  searchAccount,
  (req, resp) => {
    resp.render("updateUser.hbs");
  }
);
router.get(
  "/createproject",
  authentication,
  authorization("admin"),
  (req, resp) => {
    const role = JSON.parse(req.cookies.credintial)[0].Role;
    const isAdmin = role && role === "admin";
    resp.render("createProject.hbs", { isAdmin });
  }
);
router.get(
  "/project",
  authentication,
  authorization("admin", "staff"),
  readProject
  // (req, resp) => {
  //   const role = JSON.parse(req.cookies.credintial)[0].Role;
  //   const isAdmin = role && role === "admin";
  //   resp.render("project.hbs", { isAdmin });
  // }
);
router.get(
  "/updateproject/:id",
  authentication,
  authorization("admin"),
  searchProject,
  (req, resp) => {
    resp.render("updateProject.hbs");
  }
);

router.get(
  "/task-list",
  authentication,
  authorization("admin", "staff"),
  getTaskUI
  // searchProject,
  // (req, resp) => {
  //   const role = JSON.parse(req.cookies.credintial)[0].Role;
  //   const isAdmin = role && role === "admin";
  //   resp.render("viewTask.hbs"), { isAdmin };
  // }
);

//Task work
router.get(
  "/createTask",
  authentication,
  authorization("admin", "staff"),
  async (req, resp) => {
    const result = await getProjectController();
    const role = JSON.parse(req.cookies.credintial)[0].Role;
    const isAdmin = role && role === "admin";
    resp.render("createTask.hbs", { result, isAdmin });
  }
);
//post
router.post("/api/register", createAccount);

//delete
router.delete("/api/register/:id", deleteAccount);
router.delete("/api/delete-task/:id", deleteTask);
router.delete("/project/:id", deleteProject);

//post method
router.post("/login", login);
router.post("/task", insertTask);
router.post("/storeTime", officeTime);
router.get("/leave", (req, res) => {
  res.clearCookie(req.cookies.credintial);
  console.log(req.cookies);
  // req.clearCookie("credintial");
});
router.post("/update-project-status", updateProjectStatus);
//PUT method
router.put("/api/updateAccount/:id", updateAccount);
router.post("/update-task/:id", updateTask);
router.get("/project", readProject);
router.post("/project", createProjectLayer);
router.put("/project/:id", updateProjectLayer);

module.exports = router;
