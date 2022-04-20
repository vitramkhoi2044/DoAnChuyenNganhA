var TestCase = require('../models/testCase.model');

//Get method
exports.getTestCase = function (req, res) {
    TestCase.getTestCase(function(data) {
        res.send({result: data});
    });
}

//Post method
exports.postTestCase = function (req, res) {
    var data = req.body;
    TestCase.postTestCase(data, function(response){
        res.send({result: response});
    });
}

//Delete method
exports.deleteTestCase = function (req, res) {
    var id = req.params.id;
    TestCase.deleteTestCase(id, function(response){
        res.send({result: response});
    });
}