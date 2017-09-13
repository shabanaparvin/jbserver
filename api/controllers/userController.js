'use strict';

var mongoose = require('mongoose');

var users = mongoose.model('users');

exports.getAllUsers = function(req,res){
    users.find({},function(err,_users){
        if(err){
            console.log("error...");
            res.send(err);
        }
        res.send(_users);
    });  
}

exports.getUser = function(req,res){
    console.log(req.body);
    users.find({username:req.body.username,password:req.body.password},function(err,_user){
        if(err){
            console.log("error...");
            res.send(err);
        }
        res.send(_user);
    });  
}