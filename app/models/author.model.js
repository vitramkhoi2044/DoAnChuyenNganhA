const db = require('../databases/connectDB');

const Author = function(author){
    this.Author_id = author.Author_id;
    this.User_id = author.User_id;
    this.Total_question = author.Total_question;
}

//Get
Author.getAuthor = function(result){
    db.query('SELECT * FROM Authors',function(err,author){
        if(err){
            result(err);
        }
        else{
            result(author);
        }
    });
}

//Post
Author.postAuthor = function(data,result){
    db.query('INSERT INTO Authors SET ?', data, function(err,author){
        if(err){
            result(null);
        }
        else{
            result({Author_id:author.insertAuthor_id, ...data});
        }
    });
}

//Delete
Author.deleteAuthor = function(id,result){
    db.query('DELETE FROM Authors WHERE Author_id = ?', id, function(err,author){
        if(err){
            result(err);
        }
        else{
            result('Delete author has id: '+id+' successful');
        }
    });
}

module.exports = Author;