// Import the ORM to create functions that will interact with the database.
var orm = require("./orm.js");

var view = {
  all: function(cb) {
    orm.all("user_challenges_view", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("views", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("views", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("views", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (viewsController.js).
module.exports = view;
