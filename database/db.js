const mongoose = require("mongoose");
const connectToDb = () => {
  mongoose
    .connect(
     process.env.DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("mongoDB conectado"))
    .catch((err) => console.log(err));
};
module.exports = connectToDb;
