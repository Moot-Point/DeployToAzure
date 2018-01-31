var express = require('express');
var router = express.Router();

/* GET PASI page. */
router.get('/', function(req, res, next) {
  res.send('respond with an AWESOME REPONSE');
});

module.exports = router;
