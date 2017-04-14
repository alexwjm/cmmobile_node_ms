var mongoose = require('mongoose')
var userSchema = require('../schemas/user') //拿到导出的数据集模块
var user = mongoose.model('user', userSchema) // 编译生成Movie 模型

module.exports = user