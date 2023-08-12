const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const route = require("./Routes/resroutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Bus").then(() => {
  console.log("Connected to the database");
});

app.use("/", route);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
