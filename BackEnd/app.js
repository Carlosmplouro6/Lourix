var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var jogosRouter = require("./routes/jogos");
var funcionariosRouter = require("./routes/funcionarios");
var blogpostsRouter = require("./routes/blogposts");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/jogos", jogosRouter);
app.use("/funcionarios", funcionariosRouter);
app.use("/blogposts", blogpostsRouter);

module.exports = app;
