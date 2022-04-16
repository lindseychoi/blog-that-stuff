const router = require('express').Router();

//you are at /api

const api = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', api);

module.exports = router;