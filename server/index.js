const express = require('express');
const app = express();

const db = require('./db')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res){
	db.getAllImages(function(images){
		res.send(images);	
	});
});


app.listen(3000, function(){
	console.log('Example app listening on port 3000!');
});