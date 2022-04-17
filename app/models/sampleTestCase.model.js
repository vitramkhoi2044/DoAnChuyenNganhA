const db = require('../databases/connectDB');

const SampleTestCase = function (sampleTestCase){
    this.ID = sampleTestCase.ID;
    this.Question_id = sampleTestCase.Question_id;
    this.Input = sampleTestCase.Input;
    this.Output = sampleTestCase.Output;
}

//Get
SampleTestCase.getSampleTestCase = function (result){
    db.query('SELECT * FROM sampletestcases',function (err,sampletestcase){
        if(err){
            result(err);
        }
        else{
            result(sampletestcase);
        }
    });
}

//Post
SampleTestCase.postSampleTestCase = function (data,result){
    db.query('INSERT INTO sampletestcases SET ?', data, function (err,sampletestcase){
        if(err){
            result(null);
        }
        else{
            result({ID: sampletestcase.insertID, ...data});
        }
    });
}

//Delete
SampleTestCase.deleteSampleTestCase = function (id,result){
    db.query('DELETE FROM sampletestcases WHERE ID = ?', id, function (err){
        if(err){
            result(err);
        }
        else{
            result('Delete testcase has id: '+id+' successful');
        }
    });
}

module.exports = SampleTestCase;