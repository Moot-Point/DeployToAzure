/* This is a skeleton for API requests from the mean course.
* "request(options, callback(functions))"
* URL is required, its the path to the site. required.
* method can be get,post,put,delete. not required, defaults to get.
* json. the body of the request as a java object. empty object sent if no data is needed. required.
* a javascript object representing any query string parameters, not required.
*/

const requestOptions = {
  url : 'https://yourapi.com/api/path',
  method : 'GET',
  json : {},
  qs : {}
};
request(requestOptions, function (err, response, body) {
  if (err) {
      console.log(err);
  } else if (response.statusCode === 200) {
      console.log(body);
  } else {
      console.log(response.statusCode);
  }
});
