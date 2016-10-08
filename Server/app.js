var express = require("express");
var path 	= require("path");
var router	= require("./router");

var app	= express();
// NOTA, el puerto 80 está reservado para sudo.
app.set("port", 8081);

app.use("/", router);

//
app.listen(app.get("port"), function(err){
	if(err) throw err;
	console.log("Server running on port " + app.get("port"));
});