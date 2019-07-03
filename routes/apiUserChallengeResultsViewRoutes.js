var db = require("../models");

module.exports = function(app) {
  // Get all user challenge results
  app.get("/api/user_challenge_results_view", function(req, res) {
    db.user_challenge_results_view
      .findAll({
        attributes: [
          "id",
          "userId",
          "challengeId",
          "challengeDetailId",
          "challengeName",
          "firstName",
          "lastName",
          "goal",
          "goalOrder",
          "isDone"
        ]
      })
      .then(function(dbChallenges) {
        res.json(dbChallenges);
      });
  });

  // Get all user challenge results by userId and challengeId
  app.get("/api/user_challenge_results_view/:id/:cid", function(req, res) {
    db.user_challenge_results_view
      .findAll({
        attributes: [
          "id",
          "userId",
          "challengeId",
          "challengeDetailId",
          "challengeName",
          "firstName",
          "lastName",
          "goal",
          "goalOrder",
          "isDone"
        ],
        where: {
          userId: req.params.id,
          challengeId: req.params.cid
        }
      })
      .then(function(dbChallenges) {
        res.json(dbChallenges);
      });
  });
};
