var express = require("express");
var router = express.Router();
var connection = require("../DBconnection");

router.get("/", function (req, res, next) {
	connection.query(
		"SELECT DATE_FORMAT(Time,GET_FORMAT(TIME,'JIS')) as Time,  Person, Name, Phone FROM sp.Reservation;",
		(err, rows, field) => {
			if (err) throw err;

			const data = rows.map((item) => {
				item.Time = item.Time.slice(0, -3);
				return item;
			});
			res.render("table", {
				title: "PICO Reservation",
				items: data,
			});
		}
	);
});

module.exports = router;
