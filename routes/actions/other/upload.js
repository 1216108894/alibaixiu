const formidable = require('formidable');
const path = require('path');

module.exports = async (req, res) => {
	const form = new formidable.IncomingForm();
	//设置客户端上传文件的存储路径
	form.uploadDir = path.join(process.cwd(),'public','uploads');
	//保留上传文件的后缀名字
	form.keepExtensions = true;
	//解析客户端传递过来的FormData对象
	form.parse(req, (err, fields, files) =>{    //files.attrName.path为文件存储在服务器硬盘路径
		res.send({
			path : files.avatar.path.split('public')[1]
		});
	});
	
	/*
	// 建立结果数组
	let imgsPath = [];
	// 如果用户上传了文件
	if (req.body) {
		// 循环结果对象
		for (let attr in req.body) {
			// 如果结果对象中存在path属性
			if(req.body[attr].path) {
				// 将值存储到结果数组中
				imgsPath.push({
					[attr]: req.body[attr].path.split('public')[1]
				})
			}
		}
	}
	// 将路径响应给客户端
	res.send(imgsPath);
	*/
};