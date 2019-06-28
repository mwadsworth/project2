// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createUserLogin.html"));
  });

  app.get("/createOrJoinChallenge", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createOrJoinChallenge.html"));
  });

  app.get("/createWithGoals", function(req, res) {
    res.sendFile(Path.join(__dirname, "../public/createWithGoals.html"));
  });

  app.get("/joinAChallenge", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/joinAChallenge.html"));
  });

  app.get("/chosenChallenge", function(rez, res) {
    res.sendFile(path.join(__dirname, "../public/chosenChallenge.html"));
  });

  app.get("/congratulations", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/congratulations.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createUserLogin.html"));
  });
};
