const db = require('../databases/connectDB');

const Author = function(author){
    this.Author_id = author.Author_id;
    this.FullName = author.FullName;
    this.Email = author.Email;
    this.PhoneNumber = author.PhoneNumber;
}

//Get
Author.getAuthor = function(result){
    db.query('SELECT * FROM author',function(err,author){
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
    db.query('INSERT INTO author SET ?', data, function(err,author){
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
    db.query('DELETE FROM author WHERE Author_id = ?', id, function(err,author){
        if(err){
            result(err);
        }
        else{
            result('Delete author has id: '+id+' successful');
        }
    });
}

module.exports = Author;