var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main'); // home page control
const ctrlPresident = require('../controllers/ctrlpresident'); // president control
const ctrlMario = require('../controllers/ctrlMario'); // mario control
const ctrlBitcoin = require('../controllers/ctrlBitcoin'); // Bitcoin control

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/presidents', ctrlPresident.presidentList);  // get president list
router.get('/mario', ctrlMario.marioList);  // get mario game list
router.get('/bitcoin', ctrlBitcoin.bitcoinList);  // get bitcoin price list

router
  .route('/mario/add')
  .get(ctrlMario.showForm)  // Display form
  .post(ctrlMario.addData); // Get form data and make API call

module.exports = router;
