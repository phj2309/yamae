const mapper = require('../../DB/mapperController.js');

exports.t = async function(req, res)
{
    res.render("plan.html");
}
exports.insertPlan = async function(req, res)
{
    var userId = req.params.userId;
    var title = req.body.title;
    var country = req.body.country;
   //var startDate = req.body.startDate;
    //var finishDate = req.body.finishDate;
    var sYear = req.body.sYear;
    var sMonth = req.body.sMonth;
    var sDay = req.body.sDay;
    var fYear = req.body.fYear;
    var fMonth = req.body.fMonth;
    var fDay = req.body.fDay;

    var startDate = new Date(sYear, sMonth-1, sDay);
    var finishDate = new Date(fYear, fMonth-1, fDay);

    var btMs = finishDate.getTime() - startDate.getTime();
    var btDay = btMs/(1000*60*60*24) + 1;
    console.log(userId, title, country, sYear, sMonth, sDay, fYear, fMonth, fDay);
    console.log(btDay);
    //console.log(finishDate-startDate);
    //res.render("detailPlanShow.html");
    var i=0;
    var s = 'p';
    
    mapper.plan.createPlan(userId, title, startDate, finishDate, country).then(function(result) {
        console.log(result.insertId);
        var planId = result.insertId;

        for(i=0; i<req.body.mate.length; i++) {
            var nickname = req.body.mate[i];

            mapper.plan.insertGroup(planId, nickname).then(function(result) {
                
               console.log("성공");
               // res.render("detailPlanShow.html", { day : btDay});
            }).catch(function(error) {
                console.log(error);
                
            });
            //console.log(nickname);
        }
        res.render("detailPlanShow.html", { day : btDay});
    }).catch(function(error) {
        console.log(error);
    });

}

exports.insertDetailPlan = async function(req, res)
{
    res.render("detailPlanCreate.html");
}

exports.cost = async function(req, res)
{
    res.render("costPage.html");
}