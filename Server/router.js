var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
	res.sendFile( __dirname + "/" + "map_1.html");
});

router.get('/get_date_loc', function(req, res){
	// Preprare output in JSON format
	response = {
		date:req.query.date,
		localization:req.query.localization
	};
	// Esta response se enviará a a la query
	console.log(response);
	res.end(JSON.stringify(response));
});

router.get('/get_num', function(req,res){
	response = {
		num:req.query.num
	};
	console.log(response);
	res.end(JSON.stringify(response));
})
module.exports = router;