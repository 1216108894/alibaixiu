// 路由集合
module.exports = app => {
	// 测试
	app.use('/test', require('./test'));
	
	// 其他
	// 用户登录
	app.post('/login', require('./actions/other/login'));
	// 判断用户是否登录
	app.get('/login/status', require('./actions/other/loginStatus'))
};