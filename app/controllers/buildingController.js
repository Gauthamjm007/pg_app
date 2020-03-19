const Building = require("../models/building");

module.exports.list = (req, res) => {
  Building.find()
    .then((building) => {
      res.json(building);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Building.findById(id)
    .then((building) => {
      res.json(building);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Building.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((building) => {
      res.json(building);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const building = new Building(body);
  building
    .save()
    .then((building) => {
      res.json(building);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Building.findByIdAndDelete(id)
    .then((building) => {
      res.json(building);
    })
    .catch((err) => {
      res.json(err);
    });
};
