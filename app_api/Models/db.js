const mongoose = require('mongoose');

const dbURI = 'mongodb://admin:pasuliini@ds137435.mlab.com:37435/azure-workshop';

mongoose.connect(dbURI);


// connection status print
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ${dbURI}');
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected from ${dbURI}');
});

// this exposes mongoose schemas in appSchemas to the whole application.
require('./appSchemas');
