const routes = require("express").Router();
const TaskControler = require("../controller/TaskControler");

routes.get("/", TaskControler.getAllTasks);
routes.post("/create", TaskControler.createTask);

module.exports = routes;
