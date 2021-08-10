const { User }  = require('../../../model/User');

module.exports = async (req, res) => {
	var email = req.body.email;
	var password = req.body.password;
	// 查找用户
	let user = await User.findOne({email: email});
	// 如果用户不存在 响应
	if (user == null) return res.status(400).send({message: '未找到该邮箱'});
	
	// 如果用户存在 验证密码 若密码错误
	if( user.password != password) return res.status(400).send({message: '密码错误'});

	// 将用户信息存储在session中
	req.session.userInfo = user;
	
	// 响应
	res.send(user);

};
