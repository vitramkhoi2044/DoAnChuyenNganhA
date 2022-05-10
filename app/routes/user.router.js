var express = require('express');
var router = express.Router();

var userController = require('../controllers/user.controller');

router.get('/getlist', userController.getUser);
router.get('/getpassword/:email', userController.getPwdUser);
router.post('/add', userController.postUser);
router.delete('/remove/:id', userController.deleteUser);

module.exports = router;