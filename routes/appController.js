const router = require("express").Router();

const {sendMail} = require("../controllers/appController")

//HTTP Request
router.post('/sendmail', sendMail);

module.exports = router;