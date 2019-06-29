var db = require("../models");

module.exports = function(app) {
  // Get all challenges
  app.get("/api/user_challenges_view", function(req, res) {
    db.user_challenges_view
      .findAll({
        attributes: [
          "challengeId",
          "challengeName",
          "userId",
          "firstName",
          "lastName",
          "prize"
        ]
      })
      .then(function(dbChallenges) {
        res.json(dbChallenges);
      });
  });

  // Get a challenge by id
  app.get("/api/user_challenges_view/:id/:cid", function(req, res) {
    db.user_challenges_view
      .findOne({
        where: {
          userId: req.params.id,
          challengeId: req.params.cid
        },
        attributes: [
          "challengeId",
          "challengeName",
          "userId",
          "firstName",
          "lastName",
          "prize"
        ]
      })
      .then(function(dbChallenges) {
        res.json(dbChallenges);
      });
  });
};
