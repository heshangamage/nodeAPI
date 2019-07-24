const express = require("express");
const appController = require("../controller/studentController");

// post request body parse
const bodyParser = require("body-parser");
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();

router.get("/", appController.getAllStudents);

router.get("/add", appController.getAddStudent);

router.get("/contact", appController.getContact);

router.post("/success", urlencodedParser, appController.addStudent);

router.get("/student/:stuId", appController.getStudent);

router.post(
  "/edit/student/:_id",
  urlencodedParser,
  appController.updateStudent
);

router.delete("/delete/student/:stuId", appController.deleteStudent);

module.exports = router;
