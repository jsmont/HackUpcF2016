var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
	res.sendFile( __dirname + "/" + "1.html");
});

router.get("/heatmap", function(req, res){
	res.sendFile( __dirname + "/" + "2.html");
});

module.exports = router;