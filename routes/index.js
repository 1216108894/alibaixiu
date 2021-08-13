// 路由集合
module.exports = app => {
	// 用户管理
	app.use('/users', require('./user'));
	
	// 其他
	// 用户登录
	app.post('/login', require('./actions/other/login'));
	// 判断用户是否登录
	app.get('/login/status', require('./actions/other/loginStatus'));
	// 用户退出
	app.post('/logout', require('./actions/other/logout'));
	// 图片文件上传
	app.post('/upload', require('./actions/other/upload'));
};