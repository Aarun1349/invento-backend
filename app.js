const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// Export Rooutes
const userRoute = require("./routes/user");
const productRoute = require("./routes/products");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

// use routes
app.use("/api/v1", userRoute);
app.use("/api/v1", productRoute);

module.exports = app;
