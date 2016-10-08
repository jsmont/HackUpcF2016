var express = require("express");
var app 	= express();

app.get('/', function (req, res){
	res.sendFile( __dirname + "/" + "1.html")
});

app.get('/heatmap', function(req, res){
	res.sendFile( __dirname + "/" + "2.html")
})

var server 	= app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server listening at http://%s:%s", host, port);
})

