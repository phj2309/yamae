const router = require('express').Router();

const controller = require('./controller');

router.get('/', controller.t);  

router.post('/', controller.signAccess);

module.exports = router;
