const mongoose = require("mongoose");
const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@cluster0.k1zun.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("mongoDB conectado"))
    .catch((err) => console.log(err));
};
module.exports = connectToDb;
