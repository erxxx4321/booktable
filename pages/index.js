var express = require("express");
var router = express.Router();
var connection = require("../DBconnection");

router.get("/", function (req, res, next) {
	res.render("index", { title: "PICO Reservation" });
});

router.post("/submit", (req, res) => {
	const today =
		new Date().getFullYear() +
		"-" +
		(new Date().getMonth() + 1) +
		"-" +
		new Date().getDate();

	var sql = `insert into Reservation values("${today} ${req.body.time}", "${req.body.person}", "${req.body.firstName} ${req.body.lastName}", "${req.body.phone}")`;

	connection.query(sql, (err, result) => {
		if (err) throw err;
		res.render("submit", { title: "Submit successful" });
	});
});

module.exports = router;
