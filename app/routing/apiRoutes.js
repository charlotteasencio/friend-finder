var path = require("path");
var friends = require("../data/friends");

module.exports = (function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(){

        //calculate friend compatability here 
        
    });

    // Add new user
	//friends.push(userInput);

	// Give Response
	//res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
});