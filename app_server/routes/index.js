var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main'); // home page control
const ctrlPresident = require('../controllers/ctrlpresident'); // president control

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/presidents', ctrlPresident.presidentList);  // get president list

module.exports = router;
