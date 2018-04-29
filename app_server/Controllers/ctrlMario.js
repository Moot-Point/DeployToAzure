const request = require('request');
const apiURL = require('./apiURLs');

const showForm = function(req,res){
  res.render('mario_add');
};

const addData = function(req, res){
  const path = '/api/mario';

  const postdata = {
    year: req.body.year,
    name: req.body.name
  };

  const requestOptions = {
    url : apiURL.server + path,
    method : 'POST',
    json : postdata
  };
  request(
    requestOptions,
    function (err, response){
      if (response.statusCode === 201) {
        res.redirect('/mario');
      } else {
        res.render('error', {message: 'Error adding data: ' + response.statusMessage + ' ('+ response.statusCode + ')' });
      }
    }
  );
};

const marioList = function(req, res){

  const path = '/api/mario'; // IMPORTANT
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
        res.render('mario', {games: body}); // IMPORTANT
      }
  });
};

module.exports = {
  marioList,
  showForm,
  addData
};
