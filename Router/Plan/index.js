const router = require('express').Router();

const controller = require('./controller');

//const userViewController = require('./UserView/controller');
//const adminViewController = require('./AdminView/controller');


router.get('/', controller.toPlan);

router.post('/detailPlanShow/:userId', controller.insertPlan);

router.get('/detailPlanCreate/:planId/:dayValue', controller.showToCreate);

//router.post('/detailPlanCreate', controller.)

router.post('/detailPlanShow', controller.insertDetailPlan)

router.get('/costPage', controller.cost);
// USER VIEW
//router.get('/survey/:key', userViewController.userSwitch);

// ADMIN VIE
//router.get('/admin', adminViewController.index);


module.exports = router;
