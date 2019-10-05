const mapper = require('../../DB/mapperController.js');

exports.toPlan = async function(req, res)
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
  //  console.log(userId, title, country, sYear, sMonth, sDay, fYear, fMonth, fDay);
   // console.log(btDay);
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
                console.log("insertGroup success");
               //console.log("성공");
            }).catch(function(error) {
                console.log(error);
                
            });
            //console.log(nickname);
        }
        console.log("createPlan success");
        res.render("detailPlanShow.html", { day : btDay, planId : planId, title: title});
    }).catch(function(error) {
        console.log(error);
    });

}

exports.showToCreate = async function(req, res)
{
    var planId = req.params.planId;
    var dayValue = req.params.dayValue;
    console.log("show to create. planId : "+planId);
    console.log("days : "+dayValue);
    res.render("detailPlanCreate.html", { planId : planId});
}

exports.insertDetailPlan = async function(req, res)
{
    var planId = req.body.planId;
    var content = req.body.content;
    var sHour = req.body.sHour;
    var sMin = req.body.sMin;
    var fHour = req.body.fHour;
    var fMin = req.body.fMin;
    var startTime = new Date();
    startTime.setHours(sHour, sMin);
    var finishTime = new Date();
    finishTime.setHours(fHour, fMin);
    console.log("insertDetailPlan");
    console.log("planId : "+planId);

    //console.log("startTime : "+startTime);
   // console.log("finishTime : "+finishTime);

    mapper.plan.insertDetailPlan(planId, days, content, startTime, finishTime).then(function(result) {
        console.log("insertDetailPlan success");
        res.render("detailPlanShow.html");
     }).catch(function(error) {
         console.log(error);
         
     });
    
}

exports.cost = async function(req, res)
{
    res.render("costPage.html");
}