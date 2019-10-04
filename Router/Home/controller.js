const mapper = require('../../DB/mapperController.js');

exports.t = async function(req, res)
{
	res.render("index.html"); //a.html에 데이터 전달
}

exports.signAccess = async function (req, res)
{
	var radioCheck = req.body.tab;
    console.log("_____________들어왐마"+radioCheck);
    //회원가입
    if (radioCheck == 'signup') {
        var password1 = req.body.signup_pw;
        var password2 = req.body.signup_pw_repeat;
        var id = req.body.signup_id;
        var nickname = req.body.signup_nickname;
        var email = req.body.signup_email;

        if (password1 == password2) 
        {
			//id 유효성검사
			mapper.admin.isUser(id).then(function(result){

				//유저 생성
				mapper
                .admin
                .createUser(id, nickname, password1, email)
                .then(function (result) {
                    res.render("index.html", 
                    {
                        nickname: nickname
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });

			}).catch(function(error){
				console.log(error);
			});
			
            
        } else {
            console.log("비밀번호가 일치하지 않음");
        }

        //로그인
    } else if (radioCheck == 'signin') {
        var id = req.body.signin_id;
        var password = req.body.signin_pw;

		//id 유효성 검사
		mapper.admin.isUser(id).then(function(result){
			var nickname = "0";
			//id로 nickname 저장
			mapper.admin.findNicknameById(id).then(function(result){
				var nickname = result.nickname;
				console.log(nickname);
				res.render("index.html", {nickname: nickname});

			}).catch(function (error) {
				//select 닉네임 실패
				console.log(error);
			});

		}).catch(function(error){
			console.log(error);
		});







		var check = mapper.admin.isUser(id);
        if (check != 'null') 
        {
            check.then(function (result) 
            {
				mapper.admin.findNicknameById(id).then(function(result){
					var nickname = result.nickname;
					console.log(nickname);
					res.render("index.html", {nickname: nickname});

				}).catch(function (error) {
					//select 닉네임 실패
                    console.log(error);
				});
			});
			
			}else {
			res.redirect('/user');
			console.log("해당 아이디가 존재하지 않음");
			}
    
		}
}