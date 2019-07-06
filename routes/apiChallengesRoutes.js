var db = require("../models");

module.exports = function(app) {
  // Get all challenges
  app.get("/api/challenges", function(req, res) {
    db.challenges.findAll({}).then(function(dbChallenges) {
      res.json(dbChallenges);
    });
  });

  // Get a challenge by id
  app.get("/api/challenges/:id", function(req, res) {
    db.challenges
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbChallenges) {
        res.json(dbChallenges);
      });
  });

  // Create a new challenge
  app.post("/api/challenges", function(req, res) {
    db.challenges
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

  // PUT route for updating challenges
  app.put("/api/challenges", function(req, res) {
    db.challenges
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Delete an challenge by id
  app.delete("/api/challenges/:id", function(req, res) {
    db.challenges
      .destroy({ where: { id: req.params.id } })
      .then(function(dbChallenge) {
        res.json(dbChallenge);
      });
  });
};
