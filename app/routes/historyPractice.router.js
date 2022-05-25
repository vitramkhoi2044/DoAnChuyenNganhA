var express = require('express');
var router = express.Router();

var historyPracticeController = require('../controllers/historyPractice.controller');

router.get('/getlist', historyPracticeController.getHistoryPractice);
router.get('/gethistorypractice/:ID', historyPracticeController.getHistoryPracticeById);
router.post('/add', historyPracticeController.postHistoryPractice);

module.exports = router;