const express = require("express");
const fs = require("fs");
//any other required goes here
const path = require("path");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// ROUTER
require("./routing/api-routes.js")(app);
require("./routing/html-routes.js")(app);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
