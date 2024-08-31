const express = require("express");
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Define a route for the root URL
app.get("/", (req, res) => {
  res.render("index", { title: "My EJS App", message: "Hello, EJS!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
