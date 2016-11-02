
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactlist', function (req, res) {
    console.log('I received a GET request');

    db.contactlist.find(function (err, docs) {
	console.log(docs);
	res.json(docs);
    });
});

app.post("/contactlist", function(request, response){
    console.log(request.body);
    db.contactlist.insert(request.body, function(error, docs)
			{
			    response.json(docs);
			});
});

app.listen(3000);
console.log("Server running on port 3000");