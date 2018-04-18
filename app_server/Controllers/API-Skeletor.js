/* This is a skeleton for API requests from the mean course.
* "request(options, callback(functions))"
* URL is required, its the path to the site. required.
* method can be get,post,put,delete. not required, defaults to get.
* json. the body of the request as a java object. empty object sent if no data is needed. required.
* a javascript object representing any query string parameters, not required.
*/
const request = require('request');
const apiURL = require('./apiURLs');

const <LIST NAME HERE> = function(req, res){

  const path = '/api/<API PATH HERE>';
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
  <LIST NAME HERE>
};
