const express = require("express");
const mailController = require("../controllers/mailController");

const { Router } = express;

const routes = Router();

routes.post("/", mailController.sendMail);

module.exports = routes;
