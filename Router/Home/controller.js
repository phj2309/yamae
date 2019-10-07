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

    var item = req.body.item;
    var cost = req.body.cost;
    var country = req.body.country;

    request({
        url: 'https://okbfex.kbstar.com/quics?chgCompId=b028286&baseCompId=b028286&page=C015690&cc=b028286:b028286',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36'
        }
    }, function (err, res, html) {
        if (err) {
            console.log(err);
            return;
        }
        var $ = cheerio.load(html);
        var liList = $('#AllDsp1').children('tr').children('td');

        for (var i = 0; i < liList.length; i = i + 11) {
            var split = $(liList[i]).text().trim();
            var split2 = $(liList[i + 1]).text().trim();
            console.log(split);
            console.log(split2);
        }
    });

    mapper.plan.cost(item, cost).then(function (result) {
        console.log(result.insertItem);

        for (i = 0; i < req.body.cost.length; i++) {

                item = req.body.item[i];
                cost = req.body.cost[i];

                console.log("성공");
        }
       // res.render("costPage.html", { item: item, cost: cost });
    }).catch(function (error) {
        console.log(error);
    });

    var planId = req.params.planId;

    mapper.plan.groupCount(planId).then(function(result) {
        var count = result[0].count;
        console.log("group count : "+count);
        res.render("costPage.html", {count : count, item: item, cost: cost});
     }).catch(function(error) {
         console.log(error);
         
     });

},
exports.fDetailShow = async function (req, res) {
	res.render('detailPlanShow_2.html');
},
exports.sDetailShow = async function (req, res) {
	res.render('detailPlanShow_2.html');
}

