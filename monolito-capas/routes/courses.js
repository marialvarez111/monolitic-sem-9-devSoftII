const express = require("express");
const router = express.Router();
const controller = require("../controllers/coursesController");

router.post("/", controller.createCourse);
router.get("/", controller.listCourse);

module.exports = router;