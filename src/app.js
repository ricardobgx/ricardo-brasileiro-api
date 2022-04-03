// Imports
const express = require("express");
const cors = require("cors");

// Server
const app = express();

// Server config
app.use(express.json());
app.use(cors("*"));

// Routes
const mailRoutes = require("./routes/mail.routes");

// Use routes
app.use("/mails", mailRoutes);

module.exports = app;
