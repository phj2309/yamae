const mapper = require('../../DB/mapperController.js');
var util = require('util');
exports.t = async function (req, res) {
	//로그인 여부 판단
	if (req.session.userId) {
		var userId = req.session.userId;

		mapper.admin.findNicknameById(userId).then(function (result) {
			var nickname = result[0].nickname;
			res.render('index.html', { nickname: nickname });
		}).catch(function (error) {
			console.log(error);
		});
		

	} else {
		res.render('index.html', {nickname: 'User'});
	}
}
