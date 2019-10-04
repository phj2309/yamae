const router = require('express').Router();

const controller = require('./controller');

router.get('/', controller.t);  

module.exports = router;
