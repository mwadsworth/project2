var db = require("../models");

module.exports = function(app) {
  // Get all user challenge results
  app.get("/api/user/challenges", function(req, res) {
    db.user_challenges.findAll({}).then(function(dbChallenges) {
      res.json(dbChallenges);
    });
  });

  // Get all user challenge results by userId
  app.get("/api/user/challenges/:id", function(req, res) {
    db.user_challenges
      .findAll({
        where: {
          userId: req.params.id
        }
      })
      .then(function(dbChallenges) {
        res.json(dbChallenges);
      });
  });

  // Get all user challenge results by userId and challengeId
  app.get("/api/user/challenges/:id/:cid", function(req, res) {
    db.user_challenges
      .findOne({
        where: {
          userId: req.params.id,
          challengeId: req.params.cid
        }
      })
      .then(function(dbChallenges) {
        res.json(dbChallenges);
      });
  });

  // Create a new user challenge
  app.post("/api/user/challenges", function(req, res) {
    db.user_challenges
      .create(req.body)
      .then(function(dbChallenge) {
        res.json(dbChallenge);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // PUT route for updating user challenges
  app.put("/api/user/challenges", function(req, res) {
    db.user_challenges
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Delete an user challenge by user id and challenge id
  app.delete("/api/user/challenges/:id/:cid", function(req, res) {
    db.user_challenges
      .destroy({
        where: { userId: req.params.id, challengeId: req.params.cid }
      })
      .then(function(dbChallenge) {
        res.json(dbChallenge);
      });
  });
};
