// 用户模块
const { User } = require('../../../model/User');
// 工具
const _ = require('lodash');

module.exports = async (req, res) => {
	// 将密码、邮箱字段抛除
	req.fields = _.pick(req.body, ['nickName', 'role', 'avatar', 'status']);
	req.fields._id = req.params['id'];
	// 更新用户信息
	// new: true 返回修改后的文档 默认值为false 返回原始文档
	// fields: '-password'} 从返回值中抛除密码字段
	let user = await User.findByIdAndUpdate(req.fields._id, {$set: req.fields}, {new: true, fields: '-password'});
	// 响应
	res.send(user);	
};