var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
  
    app.get("/lunch", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/index.html"));
    });

    app.get("/groups", function(req, res) {
        console.log(res);
      });
};