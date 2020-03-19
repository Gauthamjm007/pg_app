const Tenant = require("../models/tenants");

module.exports.list = (req, res) => {
  Tenant.find()
    .populate("room")
    .then((tenant) => {
      res.json(tenant);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Tenant.findById(id)
    .then((tenant) => {
      res.json(tenant);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Tenant.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((tenant) => {
      res.json(tenant);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const tenant = new Tenant(body);
  tenant
    .save()
    .then((tenant) => {
      res.json(tenant);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Tenant.findByIdAndDelete(id)
    .then((tenant) => {
      res.json(tenant);
    })
    .catch((err) => {
      res.json(err);
    });
};
