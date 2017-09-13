'use strict';

var mongoose = require('mongoose');

var credits = mongoose.model('credits');

exports.getAllCredits = function(req,res){
    credits.find({},function(err,_credits){
        if(err){
            console.log("error...");
            res.send(err);
        }
        res.send(_credits);
    });  
}

exports.getUserCredits = function(req,res){
    console.log(req.body);
    credits.find({username:req.params.username},function(err,_credits){
        if(err){
            console.log("error...");
            res.send(err);
        }
        res.send(_credits);
    });  
}

exports.addCredit = function(req,res){
    console.log(req.body);
    credits.create(req.body,function(err,_newCredit){
        if(err){
            console.log("error...");
            res.send(err);
        }
        console.log("New Credit added");
        res.send(_newCredit)
    });
}

exports.updateCredit = function(req,res){
    console.log(req.body);
    credits.findOneAndUpdate({_id:req.body._id},{$set:{amount:req.body.amount}},function(err,_credit){
        if(err){
            console.log("error...");
            res.send(err);
        }
        console.log("Credit updated");
        res.send("000");
    });
}

exports.deleteCredit = function(req,res){
    console.log(req.body);
    credits.findOneAndRemove({_id:req.body._id},function(err,_credit){
        if(err){
            console.log("error...");
            res.send(err);
        }
        console.log("Credit deleted");
        res.send("000");
    });
}