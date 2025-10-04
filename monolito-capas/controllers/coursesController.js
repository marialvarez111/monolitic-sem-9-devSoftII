const courseService = require("../services/courseService");

const createCourse = (req, res) => {
  const newCourse = courseService.create(req.body);
  res.send(`Curso ${newCourse.title} agregado exitosamente.`);
};

const listCourse = (req, res) => {
  const list = courseService.list();
  res.json(list);
};

module.exports = { createCourse, listCourse };