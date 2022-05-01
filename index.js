const express = require('express');
var cors = require('cors')
const app = express();

//Setup Port and Host
const PORT = 4000;
const HOST = "0.0.0.0";

//set CORS
app.use(cors());

//setup Body-Parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//setup Router
var questionRouter = require('./app/routes/question.router');
app.use('/question',questionRouter);

var sampleTestCaseRouter = require('./app/routes/sampleTestCase.router');
app.use('/sampletestcases', sampleTestCaseRouter);

var testCaseRouter = require('./app/routes/testCase.router');
app.use('/testcases', testCaseRouter);

var authorRouter = require('./app/routes/author.router');
app.use('/author', authorRouter);

var userRouter = require('./app/routes/user.router');
app.use('/users',userRouter);

app.listen(PORT, HOST,function() {
    console.log('Running on Port 4000'); 
});