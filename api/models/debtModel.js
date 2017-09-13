'use strict';
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var debtsSchema = new schema({
    username:String,
    amount:Number,
    desc:String,
    date:String
});

module.exports = mongoose.model("debts",debtsSchema);