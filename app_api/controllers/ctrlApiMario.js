// get access to database connection
const mongoose = require('mongoose');

// get acces to the mario model
const marioModel = mongoose.model('mario');

const marioList = function (req, res) {
  marioModel.find({}, function(err, marios) {
    if (err) {
      res.status(404).json(err);
    }
    else{
      res.status(200).json(marios);
    }
  });
};

const addMario = function (req, res) {
  marioModel.create(req.body, function(err, newMario) {
    if (err) {
      res.status(400).json(err);
    }
    else{
      res.status(201).json(newMario);
    }
  }
);
};

module.exports = {
  marioList,
  addMario
};
