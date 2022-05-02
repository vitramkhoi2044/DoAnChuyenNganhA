var User = require('../models/user.model');

//Get method
exports.getUser = function (req, res) {
    User.getUser(function (data){
        res.send(data);
    });
}

//Get method
exports.getPwdUser = function (req, res) {
    var email = req.params.email;
    User.getPwdUser(email,function (data){
        res.send(data);
    });
}

//Post method
exports.postUser = function (req, res) {
    var data = req.body;
    User.postUser(data, function (response){
        res.send([response]);
    });
}

//Delete method
exports.deleteUser = function (req, res) {
    var id = req.params.id;
    User.deleteUser(id, function (response){
        res.send([response]);
    });
}