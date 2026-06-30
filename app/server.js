const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>To-Do App</h1><p>DevOps project is running successfully.</p><a href='/about'>About Page</a>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1><p>This is a DevOps final project.</p>");
});

app.get("/admin-panel", (req, res) => {
  res.send("<h1>Admin Panel</h1><p>Protected area</p>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});