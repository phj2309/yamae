const mapper = require('../../DB/mapperController.js');

exports.t = async function(req, res)
{
	res.render("expense.html"); //expense.html이 없어서 일단 plan으로 연결
}