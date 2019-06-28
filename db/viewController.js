var express = require("express");

var router = express.Router();

// Import the model (view.js) to use its database functions.
var view = require("./views.js");

router.get("/api/views", function(req, res) {
  console.log("Here5");
  view.all(function(result) {
    // Send back the ID of the new quote
    res.json(result);
  });
});

// Export routes for server.js to use.
module.exports = router;
