const express = require("express");
const app = express();

// enviroment properties
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;

//importing routes
const routes = require("./routes/router");

// template engine
app.set("view engine", "ejs");

// middleware
app.use("/assets", express.static("assets"));

// calling routes middleware
app.use("/", routes);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
