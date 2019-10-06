const mapper = require('../../DB/mapperController.js');

exports.toMap = async function(req, res)
{
    console.log("toMap 들어옴");
    req.session.content = req.body.content;
    req.session.sHour = req.body.sHour;
    req.session.sMin = req.body.sMin;
    req.session.fHour = req.body.fHour;
    req.session.fMin = req.body.fMin;
    req.session.planId = req.body.planId;
    req.session.dayValue = req.body.dayValue;

    console.log("req.session.dayvalue : "+req.session.dayValue);
   // var data = req.body.allData;
   // var body = req.body.content;
   // console.log("req.body: "+body);
   req.session.save(() => {
    res.render("map.html");
});
}