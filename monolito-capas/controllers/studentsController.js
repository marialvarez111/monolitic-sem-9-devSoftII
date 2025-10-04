const studentService = require("../services/studentService");

const createStudent = (req, res) => {
  const newStudent = studentService.create(req.body);
  res.send(`Estudiante ${newStudent.name} agregado exitosamente.`);
};

const listStudent = (req, res) => {
  const list = studentService.list();
  res.json(list);
};

module.exports = { createStudent, listStudent };
