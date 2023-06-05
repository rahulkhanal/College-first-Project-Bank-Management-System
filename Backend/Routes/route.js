const express = require("express");
const officeTime = require("../Controller/officeTime");
const AuthController = require("../auth/auth");
const path = require("path");
const router = express.Router();

let filePath;
router.get("/", (req, resp) => {
  filePath = path.join(__dirname,"/frontend/HTML/index.html")
  resp.sendFile(filePath);
});
router.get("/home/:id", (req, resp) => {
  filePath = path.join(__dirname,"/frontend/HTML/Home.html")
  resp.sendFile(filePath);
});
router.post("/login", AuthController("admin"), (req, res) => {});

router.get("/login", (req, resp) => {
  const filepath = path.join(__dirname);
});

router.post("/storeTime", officeTime);
module.exports = router;
