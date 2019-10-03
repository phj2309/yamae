const mapper = require('../../DB/mapperController.js');

exports.t = async function(req, res)
{
    res.render("login2.html"); // login.html 렌더링
}
exports.signAccess = async function (req, res)
{
    console("_____________들어왐");
    //회원가입
    if (req.body.tab-2 == 'signup') {
        var password1 = req.body.signup_pw;
        var password2 = req.body.signup_pw_repeat;
        var id = req.body.signup_id;
        var nickname = req.body.signup_nickname;
        var email = req.body.signup_email;

        if (password1 == password2) 
        {
            mapper
                .user
                .createUser(id, nickname, password, email)
                .then(function (result) {
                    res.render("login.html", 
                    {
                        id: id,
                        nickname: nickname,
                        password: password,
                        email: email,
                        title: '회원가입되셨습니다. 로그인해주세요'
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            console.log("비밀번호가 일치하지 않음");
        }

        //로그인
    } else if (req.document.getElementById('tab-1').checked) {
        var id = req.body.signin_id;
        var password = req.body.signin_pw;

        var check = mapper.user.getUserId(id);

        if (check != 'null') 
        {
            check.then(function (result) 
            {
                    res.render("index.html", 
                    {
                        id: id
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

}
