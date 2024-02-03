const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./Routes/route");
const cookieParser = require("cookie-parser");
const path = require("path");
const exphbs = require('express-handlebars');


//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/Routes/View/HTML")));
app.use(express.static(path.join(__dirname, "/Routes/View")));



// const hbs = exphbs.create({
//   helpers: {
//     dateFormat: function (date, format) {
//       const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
//       return new Date(date).toLocaleDateString(undefined, options);
//     },
//   },
// });

// app.engine('handlebars', hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./Routes/View/HTML");

app.use("/", router);

app.listen(7000, () => {
  console.log(`Server running on port ${7000}`);
});
