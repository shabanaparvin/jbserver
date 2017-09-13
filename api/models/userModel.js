'use strict';
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var usersSchema = new schema({
    username:String,
    password:String,
    role:String
});

module.exports = mongoose.model("users",usersSchema);