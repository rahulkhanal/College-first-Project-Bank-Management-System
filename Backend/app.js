const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./Routes/route');
const cookieParser = require('cookie-parser');

//Middleware
app.use(cors()); 
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", router);

app.listen(7000, () => {
  console.log(`Server running on port ${7000}`);
});
