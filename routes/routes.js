const routes = require("express").Router();
const TaskControler = require("../controller/TaskControler")

routes.get("/", TaskControler.getAll);

module.exports = routes