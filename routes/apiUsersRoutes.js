var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.users.findAll({}).then(function(dbChallenges) {
      res.json(dbChallenges);
    });
  });

  // Get a user by id
  app.get("/api/users/:id", function(req, res) {
    db.users
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbChallenges) {
        res.json(dbChallenges);
      });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.users
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

  // PUT route for updating users
  app.put("/api/users", function(req, res) {
    db.users
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Delete an user by id
  app.delete("/api/users/:id", function(req, res) {
    db.users
      .destroy({ where: { id: req.params.id } })
      .then(function(dbChallenge) {
        res.json(dbChallenge);
      });
  });
};
