const mapper = require('../../DB/mapperController.js');

exports.t = async function(req, res)
{
    res.render("plan.html");
}
exports.n = async function(req, res)
{
    var title = req.body.title;
    var country = req.body.country;
    var startDate = req.body.startDate;
    var finishDate = req.body.finishDate;
    mapper.plan.createPlan(title, country, startDate, finishDate).then(function(result) {
        res.render("detailPlanShow.html", { title: title, country: country, startDate: startDate, finishDate: finishDate});
    }).catch(function(error) {
        console.log(error);
    });
    
}