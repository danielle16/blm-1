var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/api/victims", function(req, res) {
    db.Victim.findAll({}).then(function(dbVictim) {
      res.render("index", {
        msg: "Welcome!",
        victims: dbVictim
      });
    });
  });

  // Load design page to test CSS
  app.get("/design", function(req, res) {
    res.render("design");
      });

  app.get("/add-story", function(req, res) {
    res.render("add-story");
  });

  app.get("/gmail_api", function(req, res) {
    res.render("gmail_api");
  });


  // Load example page and pass in an example by id
  app.get("/victims/:id", function(req, res) {
    db.Victim.findOne({ where: { id: req.params.id } }).then(function(dbVictim) {
      res.render("model", {
        model: dbVictim
      });
    });
  });

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
