const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://narangua:g9EAqg5VyNy3DawX@cluster0.n7qozby.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log("DB Error: ", err.message);
    } else {
      console.log("DB Connected");
    }
  }
);

const router = require("./routes/MaterialRoute");

const app = express();
app.use(express.json());

app.use("/api/", router);

app.listen(8080, () => console.log("listing the server on 8080..."));
