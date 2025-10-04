const express = require("express");
const router = express.Router();
const controller = require("../controllers/studentsController");

router.post("/", controller.createStudent);
router.get("/", controller.listStudent);

module.exports = router;
