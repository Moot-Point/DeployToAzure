const express = require('express');
const router = express.Router();

const ctrlApiPresident = require('../controllers/ctrlApiPresident');
const ctrlApiMario = require('../controllers/ctrlApiMario');
const ctrlApiBitcoin = require('../controllers/ctrlApiBitcoin');

// presidents. president name - number - year
router
    .route('/president')
    .get(ctrlApiPresident.presidentList)
    .post(ctrlApiPresident.addPresident);
// mario. name of game - year.
router
    .route('/mario')
    .get(ctrlApiMario.marioList)
    .post(ctrlApiMario.addMario);
// bitcoin. change - time.
router
    .route('/bitcoin')
    .get(ctrlApiBitcoin.bitcoinList)
    .post(ctrlApiBitcoin.addBitcoin);

module.exports = router;
