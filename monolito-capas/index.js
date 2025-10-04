const express = require("express");
const app = express();
const port = 5002;

app.use(express.json());

const studentsRoute = require("./routes/students");
const coursesRoute = require("./routes/courses");

app.use("/students", studentsRoute);
app.use("/courses", coursesRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
