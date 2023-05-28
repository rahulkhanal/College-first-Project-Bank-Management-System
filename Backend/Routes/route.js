const express = require('express');
const officeTime = require('../Controller/officeTime');
const router = express.Router();

router.get("/regester", (req,resp)=>{
    resp.send("Hello Regester here")
});
router.post("/storeTime", officeTime);
module.exports = router;