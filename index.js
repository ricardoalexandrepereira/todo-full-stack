const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectToDb = require("./database/db");
const { urlencoded } = require("express");

connectToDb();
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); /* ligar front ao back-end*/
app.use(express.urlencoded());
app.use(routes);

app.listen(port, () => {
  console.log(`servidor a ligado em http://localhost:${port}`);
});
