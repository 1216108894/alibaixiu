// 数据库操作
const mongoose = require('mongoose');
// 模型规则类
const { Schema } = mongoose;

// 用户集合规则
const UserSchema = new Schema({
	// 昵称
	nickName: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 30
	},
	// 邮件
	email: {
		type: String,
		required: true,
		unique: true
	},
	// 密码
	password: {
		type: String,
		required: true
	},
	// 角色
	role: {
		type: String,
		// admin 超级管理员 normal 普通用户
		default: 'normal',
		enum: ['admin', 'normal']
	},
	// 头像
	avatar: {
		type: String,
		default: null
	},
	// 创建时间
	createTime: {
		type: Date,
		default: Date.now
	},
	// 状态
	status: {
		// 0 未激活 1 激活
		type: Number,
		required: true,
		default: 1
	}
}, {versionKey: false});

// 用户集合类
const User = mongoose.model('User', UserSchema);

/*
//先给数据库初始化一个用户
User.findOne({'email': 'itheima@itcast.cn'}).then(async result => {
	if (result == null) {
		const user = await User.create({
			nickName: 'itcast',
			email: 'itheima@itcast.cn',
			password: '123456',
			role: 'admin',
			avatar: null,
			createTime: new Date,
			status: 1
		});
	}
})
*/

// 导出对象
module.exports = { User };