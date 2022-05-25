var HistoryPractice = require('../models/historyPractice.model');

//Get method
exports.getHistoryPractice = function (req, res) {
    HistoryPractice.getHistoryPractice(function (data) {
        res.send(data);
    });
}

//Get method
exports.getHistoryPracticeById = function (req, res) {
    var ID = req.params.ID;
    HistoryPractice.getHistoryPracticeById(ID, function (data) {
        res.send(data);
    });
}

//Post method
exports.postHistoryPractice = function (req, res) {
    var data = req.body;
    HistoryPractice.postHistoryPractice(data, function (response) {
        res.send([response]);
    })
}