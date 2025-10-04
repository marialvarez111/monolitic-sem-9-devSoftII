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

app.post("/students", (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.send(`Estudiante ${newStudent.name} agregado exitosamente.`);
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/courses", (req, res) => {
  const newCourse = req.body;
  courses.push(newCourse);
  res.send(`Curso ${newCourse.title} agregado exitosamente.`);
});

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port} 🚀`);
});
