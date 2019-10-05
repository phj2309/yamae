const mapper = require('../../DB/mapperController.js');

exports.t = async function(req, res)
{
	res.render("plan.html"); //expense.html 아직 안받아서 일단 plan으로 연결
}