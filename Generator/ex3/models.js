//models.js
const mongoose = require('mongoose');

// ===============
// Database Config
// ===============
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/ABCCompany', {useNewUrlParser: true, useUnifiedTopology:true});

// =======
// Schemas
// =======

const CustomerSchema = new Schema({
    name: String,
    gender:String,
    email:String,
    created: { type: Date, default: Date.now }
  },
  { strict: false }
);

const models = {};
models.Customers = mongoose.model('customers', CustomerSchema);

module.exports = models;