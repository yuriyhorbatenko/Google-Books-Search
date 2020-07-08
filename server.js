require("dotenv").config()

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;
const mongoLink = process.env.MONGO_KEY;
const MONGODB_URI = process.env.MONGODB_URI || mongoLink;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
mongoose.connect(MONGODB_URI);

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT + "!");
});
