var mongoose = require('mongoose');
 
 //申明一个mongoons对象
var userSchema = new mongoose.Schema({
    username: String,
    password: String
})

//每次执行都会调用,时间更新操作
/*userSchema.pre('save', function(next) {

    next();
})*/

//查询的静态方法
userSchema.statics = {
    fetch: function(cb) { //查询所有数据
        return this
          .find()
          .exec(cb) //回调
    },
    findByName: function(name, cb) { //根据id查询单条数据
        return this
          .findOne({"username": name})          
          .exec(cb)
    },
    findByUser: function(name,password,cb) { //根据id查询单条数据
        return this
          .findOne({"username": name,"password":password})          
          .exec(cb)
    },
    findById: function(id, cb) { //根据id查询单条数据
        return this
          .findOne({_id: id})          
          .exec(cb)
    }
}

//暴露出去的方法
module.exports = userSchema