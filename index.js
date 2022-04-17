var express = require('express');
var app = express();
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

app.listen(4000,function(){
    console.log("Server is running on port 4000");
});