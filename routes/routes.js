const routes = require("express").Router();
const TaskControler = require("../controller/TaskControler");

routes.get("/", TaskControler.getAllTasks);
routes.post("/create", TaskControler.createTask);
routes.get("/getById/:id/:method", TaskControler.getById);
routes.post("/updateOne/:id", TaskControler.updateOneTask);
routes.get("/deleteOne/:id", TaskControler.deleteOneTask);
routes.get("/check/:id", TaskControler.taskCheck);

module.exports = routes;
