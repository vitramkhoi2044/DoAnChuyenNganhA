var SampleTestCase = require('../models/sampleTestCase.model');

//Get method
exports.getSampleTestCase = function (req, res) {
    SampleTestCase.getSampleTestCase(function(data) {
        res.send({result: data});
    });
}

//Post method
exports.postSampleTestCase = function (req, res) {
    var data = req.body;
    SampleTestCase.postSampleTestCase(data, function(response){
        res.send({result: response});
    });
}

//Delete method
exports.deleteSampleTestCase = function (req, res) {
    var id = req.params.id;
    SampleTestCase.deleteSampleTestCase(id, function(response){
        res.send({result: response});
    });
}

exports.getExamples = function (req, res) {
    data = [
        {"ID": 1,
        "Question_id": 1,
        "Input": "1 2",
        "Output": "3"},
        
        {"ID": 2,
        "Question_id": 2,
        "Input": "5 2",
        "Output": "3"},

        {"ID": 3,
        "Question_id": 3,
        "Input": "3 2",
        "Output": "6"},

        {"ID": 4,
        "Question_id": 4,
        "Input": "6 2",
        "Output": "3"},
    ];
    res.send({result:data});
}