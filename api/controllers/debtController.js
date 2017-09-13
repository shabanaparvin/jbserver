'use strict';

var mongoose = require('mongoose');

var debts = mongoose.model('debts');

exports.getAllDebts = function(req,res){
    debts.find({},function(err,_debts){
        if(err){
            console.log("error...");
            res.send(err);
        }
        res.send(_debts);
    });  
}

exports.getUserDebts = function(req,res){
    console.log(req.body);
    debts.find({username:req.params.username},function(err,_debts){
        if(err){
            console.log("error...");
            res.send(err);
        }
        res.send(_debts);
    });  
}

exports.addDebt = function(req,res){
    console.log(req.body);
    debts.create(req.body,function(err,_newDebt){
        if(err){
            console.log("error...");
            res.send(err);
        }
        console.log("New Debt added");
        res.send(_newDebt)
    });
}

exports.updateDebt = function(req,res){
    console.log(req.body);
    debts.findOneAndUpdate({_id:req.body._id},{$set:{amount:req.body.amount}},function(err,_debt){
        if(err){
            console.log("error...");
            res.send(err);
        }
        console.log("Debt updated");
        res.send("000");
    });
    /*
    debts.findById(req.body._id, function (err, doc) {
        if (err) return handleError(err);
        console.log(doc);
        doc.username = req.body.username;
        doc.amount = req.body.amount;
        doc.desc = req.body.desc;
        doc.date = req.body.date
        doc.save(function(err,_debt){
            if (err) return handleError(err);
            res.send(_debt)
        });
      });*/
}

exports.deleteDebt = function(req,res){
    console.log(req.body);
    debts.findOneAndRemove({_id:req.body._id},function(err,_debt){
        if(err){
            console.log("error...");
            res.send(err);
        }
        console.log("Debt deleted");
        res.send("000");
    });
}