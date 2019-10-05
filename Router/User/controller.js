const mapper = require('../../DB/mapperController.js');

exports.t = async function(req, res)
{
    res.render("login2.html"); // login.html 렌더링
}
exports.findPassword = async function(req, res)
{
    res.render("findPassword.html");
}