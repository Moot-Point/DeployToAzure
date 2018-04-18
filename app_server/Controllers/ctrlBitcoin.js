const request = require('request');
const apiURL = require('./apiURLs');

const bitcoinList = function(req, res){

  const path = '/api/bitcoin'; // IMPORTANT
  const requestOptions = {
    url : apiURL.server + path,
    method : 'GET',
    json : {},
    qs : {}
  };
  request(
    requestOptions,
    function (err, response, body) {
      if (err) {
        res.render('error', {messaege: err.message});
      } else if (response.statusCode !== 200) {
        res.render('error', {message: 'Error accessing API: ' + response.statusMessage + " ("+ response.statusCode + ")" });
      } else if (!(body instanceof Array)) {
        res.render('error', {messaege: 'Unexpected response data'});
      } else if (!body.length) {
        res.render('error', {messaege: 'No documents in collection'});
      } else {
        res.render('bitcoin', {prices: body}); // IMPORTANT
      }
  });
};

module.exports = {
    bitcoinList
};
