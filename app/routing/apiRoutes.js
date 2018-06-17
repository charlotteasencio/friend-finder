var path = require("path");
var friends = require("../data/friends");

module.exports = (function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){

        var userAnswer = req.body;
        var userScores = userAnswer.scores;
        
        var friendMatch = '';
		//var matchImage = '';
        var total = 500;

        for (var i = 0; i < friends.length; i++) {
            var difference = 0;
			for (var j = 0; j < userScores.length; j++) {
				difference += Math.abs(friends[i].scores[j] - userScores[j]);
        }

        if (difference < total) {
            //console.log('Closest match found = ' + difference);
		    //console.log('Friend name = ' + friends[i].name);
            // console.log('Friend image = ' + friends[i].photo);
            
            totalDifference = diff;
            matchName = friends[i].name;
            //matchImage = friends[i].photo;
        }
    }
    // Add new user
	friends.push(userAnswer);

	// Give Response
res.json({status: 'OK', friendMatch: friendMatch});

    });
});