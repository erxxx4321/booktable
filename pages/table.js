var express = require("express");
var router = express.Router();
var connection = require("../DBconnection");

router.get("/", function (req, res, next) {
	connection.query("select * from Reservation", (err, rows, field) => {
		if (err) throw err;
		res.render("table", {
			title: "PICO Reservation",
			items: rows,
		});
	});
});

module.exports = router;
