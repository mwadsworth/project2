var db = require("../models");

module.exports = function(app) {
  // Get all user challenge results
  app.get("/api/user/challenge/results", function(req, res) {
    db.user_challenge_results.findAll({}).then(function(dbChallenges) {
      res.json(dbChallenges);
    });
  });

  // Get all user challenge results by userId and challengeId
  app.get("/api/user/challenge/results/:id/:cid", function(req, res) {
    db.user_challenge_results
      .findAll({
        where: {
          userId: req.params.id,
          challengeId: req.params.cid
        }
      })
      .then(function(dbChallenges) {
        res.json(dbChallenges);
      });
  });

  // Create a new challenge
  app.post("/api/user/challenge/results", function(req, res) {
    db.user_challenge_results.create(req.body).then(function(dbChallenge) {
      res.json(dbChallenge);
    });
  });

  // PUT route for updating user challenge results
  app.put("/api/user/challenge/results", function(req, res) {
    db.user_challenge_results
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Delete an user challenge result by id
  app.delete("/api/user/challenge/results/:id", function(req, res) {
    db.user_challenge_results
      .destroy({ where: { id: req.params.id } })
      .then(function(dbChallenge) {
        res.json(dbChallenge);
      });
  });
};
