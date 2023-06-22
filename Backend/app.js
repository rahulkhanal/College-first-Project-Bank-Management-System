const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./Routes/route");
const cookieParser = require("cookie-parser");
const path = require("path");

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/Routes/view")));

app.use("/", router);

app.listen(7000, () => {
  console.log(`Server running on port ${7000}`);
});
