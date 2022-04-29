var express = require('express');
var router = express.Router();

var questionController = require('../controllers/question.controller');

router.get('/getlist', questionController.getQuestion);
router.post('/add', questionController.postQuestion);
router.delete('/remove/:id', questionController.deleteQuestion);

module.exports = router;