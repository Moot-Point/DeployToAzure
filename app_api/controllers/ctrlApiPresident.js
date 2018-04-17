// get access to database connection
const mongoose = require('mongoose');

// get acces to the president model, so it can interacti with presidentlist?
const presidentModel = mongoose.model('president');

const presidentList = function (req, res) {
  presidentModel.find({}, function(err, presidents) {
    if (err) {
      res.status(404).json(err);
    }
    else{
      res.status(200).json(presidents);
    }
  });
};

const addPresident = function (req, res) {
  presidentModel.create(req.body, function(err, newPresident) {
    if (err) {
      res.status(400).json(err);
    }
    else{
      res.status(201).json(newPresident);
    }
  }
);
};

module.exports = {
  presidentList,
  addPresident
};
