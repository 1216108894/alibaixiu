// 用户路由
const test = require('express').Router();

test.get('/',require('./actions/test/a'));

// 导出路由
module.exports = test;