var express = require('express');
var router = express.Router();

var sampleTestCaseController = require('../controllers/sampleTestCase.controller');

router.get('/getlist',sampleTestCaseController.getSampleTestCase);
router.post('/add',sampleTestCaseController.postSampleTestCase);
router.delete('/remove/:id',sampleTestCaseController.deleteSampleTestCase);

module.exports = router;