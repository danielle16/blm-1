module.exports = function(app) {
  // retrieves all victims
  app.get("/", function(req, res) {
    db.Victim.findAll({}).then(function(dbVictim) {
      res.json(dbVictim);
    });
  });

// modal that allows the user to click on one victim
  app.get("/", function(req, res) {
  if (req.params.Victim) {
    db.findOne({
      where: {
        victimName: req.params.Victim
      }
    }).then(function(dbVictim) {
      return res.json(dbVictim);
    });
  }
  else {
    Character.findAll({}).then(function(dbVictim) {
      return res.json(dbVictim);
    });
  }
});

// form to enter data about a new victim 
app.post("/victim/new", function(req, res) {
  var victim = req.body;

  // var routeName = victim.name.replace(/\s+/g, "").toLowerCase();

  db.create({
    // routeName: routeName,
    first_name: victim.first_name,
    last_name: victim.last_name,
    gender: victim.gender,
    city: victim.city,
    state: victim.state,
    testimonial: victim.testimonial,
    media_resources: victim.media_resources,
    contact_person_name: victim.contact_person_name,
    contact_person_email: victim.contact_person_email,
    reported_by: victim.reported_by
  });
});






//   // Create a new example
  app.post("/", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
};
