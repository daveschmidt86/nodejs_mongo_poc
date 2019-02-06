const express = require('express');
const router = express.Router();
const v1router = require('./v1');
const v2router = require('./v2');

router.use('/v1', v1router);
router.use('/v2', v2router);

module.exports = router;
