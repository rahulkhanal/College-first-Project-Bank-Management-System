const express = require("express");
const officeTime = require("../Controller/officeTime");
// const AuthController = require("../auth/auth");
const path = require("path");
const { login } = require("../Controller/login");
const autthentication = require("../middlewares/autthentication");
const router = express.Router();

//all the file
let filePath;
router.get("/", (req, resp) => {
  filePath = path.join(__dirname, "/view/HTML/index.html");
  resp.sendFile(filePath);
});
router.get("/home", autthentication, (req, resp) => {
  filePath = path.join(__dirname, "/view/HTML/Home.html");
  resp.sendFile(filePath);
});
router.get("/createproject", (req, resp) => {
  filePath = path.join(__dirname, "/view/HTML/createProject.html");
  resp.sendFile(filePath);
});
// router.post("/login", AuthController("admin"), (req, res) => {});

router.get("/login", (req, resp) => {
  const filepath = path.join(__dirname);
});

//post method
router.post("/login", login);
router.post("/storeTime", officeTime);
module.exports = router;
