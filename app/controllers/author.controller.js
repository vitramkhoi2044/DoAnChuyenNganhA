var Author = require('../models/author.model');

//Get method
exports.getAuthor = function (req, res) {
    Author.getAuthor(function(data) {
        res.send(data);
    });
}

//Post method
exports.postAuthor = function (req, res) {
    var data = req.body;
    Author.postAuthor(data,function(response){
        res.send(response);
    });
}

//Delete method
exports.deleteAuthor = function (req, res) {
    var id = req.params.id;
    Author.deleteAuthor(id,function(response){
        res.send({response});
    });
}