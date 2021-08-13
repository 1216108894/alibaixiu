const { User } = require('../../../model/User');
//引入formdata数据类型解析对模块

module.exports = async (req, res) => {
	
	var email = req.body.email
	
	// 查询用户
	let user = await User.findOne({email: req.body.email});
	// 用户已存在
	if (user) return res.status(400).send({message: '邮箱已经被注册'});
	
	// 用户不存在 可以正常执行注册流程
	// 创建用户
	user = new User(req.body);
	// 保存用户
	await user.save();
	// 响应
	res.send(user);

};