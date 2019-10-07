const mapper = require('../../DB/mapperController.js');
var util = require('util');
exports.t = async function (req, res) {
	//var keyword="";
	//로그인 여부 판단
	if (req.session.userId) {
		var userId = req.session.userId;

		mapper.admin.findNicknameById(userId).then(function (result) {
			var nickname = result[0].nickname;
			//var planList = new Array();
			

			res.render('index.html', { nickname: nickname });
		}).catch(function (error) {
			console.log(error);
		});
		

	} else {
		res.render('index.html', {nickname: 'User'});
	}
},
exports.toDetailShowView = async function (req, res) {
	res.render('detailPlanShow_view.html');
},
exports.toBasket = async function (req, res) {
	res.render('basket_stack2.html');
},
exports.toCostPage = async function (req, res) {

    res.render("costPage.html");

},
exports.fDetailShow = async function (req, res) {
	res.render('detailPlanShow_2.html');
},
exports.sDetailShow = async function (req, res) {
	res.render('detailPlanShow_2.html');
},
exports.index2 = async function (req, res) {
	res.render('index_stack2.html');
},
exports.indexSearch = async function (req, res) {
	res.render('index_search.html');
},
exports.profile = async function (req, res) {
	res.render('myPage_profile.html');
},
exports.myPlan = async function (req, res) {
	res.render('myPage_plan.html');
}

