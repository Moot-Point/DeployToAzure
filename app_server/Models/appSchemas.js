const mongoose = require('mongoose');

// schemas define document structure
const presidentSchema = new mongoose.Schema({name:String, number:String, year:String});
const marioSchema = new mongoose.Schema({name:String, year:String})
const bitcoinSchema = new mongoose.Schema({change:String, time:String})

// models contain compiled schemas, for later use.
mongoose.model('president', presidentSchema);
mongoose.model('mario', marioSchema);
mongoose.model('bitcoin', bitcoinSchema);
