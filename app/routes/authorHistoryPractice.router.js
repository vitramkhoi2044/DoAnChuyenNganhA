var express = require('express');
var router = express.Router();

var authorHistoryPracticeController = require('../controllers/authorHistoryPractice.controller');

router.get('/getlist', authorHistoryPracticeController.getAuthorHistoryPractice);
router.get('/gethistorypractice/:Id', authorHistoryPracticeController.getAuthorHistoryPracticeByAuthorId);
router.get('/gethistorypracticebyid/:Id', authorHistoryPracticeController.getAuthorHistoryPracticeById);
router.post('/add', authorHistoryPracticeController.postAuthorHistoryPractice);

module.exports = router;