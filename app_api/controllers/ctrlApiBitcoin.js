// get access to database connection
const mongoose = require('mongoose');

// get acces to the bitcoin model,
const bitcoinModel = mongoose.model('bitcoin');

const bitcoinList = function (req, res) {
  bitcoinModel.find({}, function(err, bitcoins) {
    if (err) {
      res.status(404).json(err);
    }
    else{
      res.status(200).json(bitcoins);
    }
  });
};

const addBitcoin = function (req, res) {
  bitcoinModel.create(req.body, function(err, newBitcoin) {
    if (err) {
      res.status(400).json(err);
    }
    else{
      res.status(201).json(newBitcoin);
    }
  }
);
};

module.exports = {
  bitcoinList,
  addBitcoin
};
