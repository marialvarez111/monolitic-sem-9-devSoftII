const express = require("express");
const app = express();
const port = 5002;

app.use(express.json());

const studentsRoute = require("./routes/students");
app.use("/students", studentsRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
