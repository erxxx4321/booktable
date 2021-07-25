var express = require("express");
var path = require("path");
var cors = require("cors");
var app = express();

var indexPage = require("./pages/index");
var tablePage = require("./pages/table");

// set up view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "static")));

app.use("/", indexPage);
app.use("/table", tablePage);

app.listen(4000, () => {
	console.log("Start server on port 4000");
});
