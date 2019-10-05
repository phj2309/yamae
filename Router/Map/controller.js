const mapper = require('../../DB/mapperController.js');

exports.toMap = async function(req, res)
{
    //console.log("toMap 들어옴");
   // var data = req.body.allData;
   var data = req.body;
    console.log(data);
    res.render("map.html");
}