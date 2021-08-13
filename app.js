// 引入express框架
const express = require('express');
// 引入数据库处理模块
const mongoose = require('mongoose');
// 引入路径处理模块
const path = require('path');
//引入post参数解析模块
const bodyParser = require('body-parser');
//引入session模块
var session = require('express-session');
//引入formdata数据类型处理模块
const formidable = require('formidable');
// web服务器
const app = express();
// 开放静态资源
app.use(express.static(path.join(__dirname, 'public')));
//post参数配置
app.use(bodyParser.urlencoded( { extended: false }) );
// 数据库连接
mongoose.connect('mongodb://localhost:27017/alibaixiu', { useNewUrlParser: true, useCreateIndex: true})
	.then(() => console.log('数据库连接成功'))
	.catch(() => console.log('数据库连接失败'));
// session配置
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
// 路由
require('./routes')(app);
// 返回系统监听
app.listen(3000, () => console.log('服务器启动成功'));