var path = require("path");
var friends = require("../data/friends");

module.exports = (function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){

        var newScores = req.body.scores;
        var scores = [];
        var bestMatch = 0;

        for (var i = 0; i < friends.length; i++) {
            var difference = 0;
			for (var j = 0; j < newScores.length; j++) {
				difference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newScores[j])));
        }

            scores.push(difference);
        }

        for(var i=0; i<scores.length; i++){
            if(scores[i] <= scores[bestMatch]){
              bestMatch = i;
            }
          }

        var friendMatch = friends[bestMatch];
          res.json(friendMatch);
          console.log(friendMatch);

          friends.push(req.body);
    });
});