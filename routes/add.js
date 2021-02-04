var data = require("../data.json");

exports.addFriend = function(request, response) { 
	var friendAdd = {
		"name": request.query.name,
		"description": request.query.description,
		"imageURL": "http://lorempixel.com/500/500/people"
	}
	data.friends.push(friendAdd);
	response.render('index', data);
}