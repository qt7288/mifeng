//链接池模块
const mysql=require('mysql');
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'qz',
	connectionLimit:100
	});
module.exports=pool;