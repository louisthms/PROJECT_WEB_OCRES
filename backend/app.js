var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const contactRoutes = require('./routes/contact.routes');
// require('.models/dBConfig');
const cors = require('cors');

var indexRouter = require("./routes/index");
//var usersRouter = require("./routes/users");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
//app.use("/users", usersRouter);
app.use('/api/user', contactRoutes);

module.exports = app;
