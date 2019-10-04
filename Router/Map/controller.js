const mapper = require('../../DB/mapperController.js');

exports.toMap = async function(req, res)
{
    res.render("map.html");
}