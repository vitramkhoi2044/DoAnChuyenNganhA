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

exports.getExamples = function (req, res) {
    data = [
        {"ID": 1,
        "Question_id": 1,
        "Input": "10 2",
        "Output": "12"},
        
        {"ID": 2,
        "Question_id": 1,
        "Input": "123 150",
        "Output": "273"},

        {"ID": 3,
        "Question_id": 1,
        "Input": "1235 2530",
        "Output": "3765"},

        {"ID": 4,
        "Question_id": 2,
        "Input": "6 3",
        "Output": "3"},

        {"ID": 5,
        "Question_id": 2,
        "Input": "156 50",
        "Output": "106"},

        {"ID": 6,
        "Question_id": 2,
        "Input": "2560 1620",
        "Output": "940"},

        {"ID": 7,
        "Question_id": 3,
        "Input": "6 2",
        "Output": "12"},

        {"ID": 8,
        "Question_id": 3,
        "Input": "132 52",
        "Output": "6864"},

        {"ID": 9,
        "Question_id": 3,
        "Input": "1320 520",
        "Output": "686400"},

        {"ID": 10,
        "Question_id": 4,
        "Input": "9 3",
        "Output": "3"},

        {"ID": 11,
        "Question_id": 4,
        "Input": "560 20",
        "Output": "28"},

        {"ID": 12,
        "Question_id": 4,
        "Input": "18850 650",
        "Output": "29"},
    ];
    res.send({result:data});
}