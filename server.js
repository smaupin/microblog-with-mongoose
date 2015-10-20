var mongoose = require('mongoose'),
	express = require('express'),
	bodyparser = require('body-parser'),
	app = express();


// MIDDLEWARE



// ROUTES
app.get('/', function (req, res) {
	res.send("2:59 -- One to three.");
});



app.listen(3000, function () {
	console.log("UP AND RUNNING");
});
