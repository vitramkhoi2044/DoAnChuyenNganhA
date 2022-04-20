var Question = require('../models/question.model');

//Get method
exports.getQuestion = function(req, res){
    Question.getQuestion(function(data){
        res.send({result:data});
    });
}

//Post method
exports.postQuestion = function(req, res){
    var data = req.body;
    Question.postQuestion(data,function(response){
        res.send({result:response});
    });
}

//Delete method
exports.deleteQuestion = function(req, res){
    var id = req.params.id;
    Question.deleteQuestion(id,function(response){
        res.send({result:response});
    })
}