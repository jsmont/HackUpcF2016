var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
	res.sendFile( __dirname + "/" + "map_1.html");
});

router.get('/process_get', function(req, res){
	// Preprare output in JSON format
	response = {
		date:req.query.date,
		localization:req.query.localization
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

module.exports = router;