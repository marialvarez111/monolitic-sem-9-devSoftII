const express = require("express");
const app = express();
const port = 5001;

app.use(express.json());

// Persistence
let students = [];
let courses = [];

// Routes
app.get("/", (req, res) => {
  res.send("Bienvenido al sistema de gestión Académica");
});

// -------------------- STUDENTS --------------------
app.post("/students", (req, res) => {
  const newStudent = { id: students.length + 1, ...req.body };
  students.push(newStudent);
  res.send(`Estudiante ${newStudent.name} agregado exitosamente.`);
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  if (!student) return res.status(404).send("Estudiante no encontrado.");
  res.json(student);
});

app.put("/students/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  if (!student) return res.status(404).send("Estudiante no encontrado.");

  Object.assign(student, req.body);
  res.send(`Estudiante ${student.name} actualizado correctamente.`);
});

app.delete("/students/:id", (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.send("Estudiante eliminado correctamente.");
});

// -------------------- COURSES --------------------
app.post("/courses", (req, res) => {
  const newCourse = { id: courses.length + 1, ...req.body };
  courses.push(newCourse);
  res.send(`Curso ${newCourse.title} agregado exitosamente.`);
});

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.get("/courses/:id", (req, res) => {
  const course = courses.find(c => c.id == req.params.id);
  if (!course) return res.status(404).send("Curso no encontrado.");
  res.json(course);
});

app.put("/courses/:id", (req, res) => {
  const course = courses.find(c => c.id == req.params.id);
  if (!course) return res.status(404).send("Curso no encontrado.");

  Object.assign(course, req.body);
  res.send(`Curso ${course.title} actualizado correctamente.`);
});

app.delete("/courses/:id", (req, res) => {
  courses = courses.filter(c => c.id != req.params.id);
  res.send("Curso eliminado correctamente.");
});

// -------------------- SERVER --------------------
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port} 🚀`);
});
