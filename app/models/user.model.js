const db = require('../databases/connectDB');

const User = function (user){
    this.User_id = user.User_id;
    this.FullName = user.FullName;
    this.Email = user.Email;
    this.PhoneNumber = user.PhoneNumber;
    this.Password = user.Password;
}

//Get
User.getUser = function(result){
    db.query("SELECT * FROM Users ",function(err,user){
        if(err){
            result(err);
        }
        else{
            result(user);
        }
    });
}

//Post
User.postUser = function(data,result){
    db.query("INSERT INTO Users SET ?",data,function(err,user){
        if(err){
            result(null);
        }
        else{
            result({User_id:user.insertUser_id, ...data});
        }
    });
}

//Delete
User.deleteUser = function(id,result){
    db.query("DELETE FROM Users WHERE User_id = ?",id,function(err,user){
        if(err){
            result(err);
        }
        else{
            result('Delete user has id: '+id+' successful')
        }
    });
}

module.exports = User;