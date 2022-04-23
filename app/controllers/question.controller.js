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

exports.getExamples = function(req, res){
    var data = [
        {"Question_id": 3,
        "Title": "Tich",
        "Description": "Tich a*b",
        "CreateDate": "2022-04-15T17:00:00.000Z",
        "Topic": "Co ban",
        "Level": "De",
        "Author_id": 1}
    ];
    res.send({result:data});
}