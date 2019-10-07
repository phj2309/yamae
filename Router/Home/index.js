const router = require('express').Router();

const controller = require('./controller');

//const userViewController = require('./UserView/controller');
//const adminViewController = require('./AdminView/controller');


router.get('/', controller.t);

router.get('/detailPlanShow_view', controller.toDetailShowView);

router.get('/basket_stack2', controller.toBasket);

router.get('/costPage', controller.toCostPage);

router.get('/detailPlanShow_2_st', controller.fDetailShow);

router.get('/detailPlanShow_2_nd', controller.sDetailShow);



// USER VIEW
//router.get('/survey/:key', userViewController.userSwitch);

// ADMIN VIE
//router.get('/admin', adminViewController.index);


module.exports = router;
