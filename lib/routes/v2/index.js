let express = require('express');
let v2router = express.Router();

const personRoute = require('./person');

v2router.use((req, res, next) => {
    req.api_version = 'v2';
    next();
});

v2router.use('/person', personRoute);

module.exports = v2router;
