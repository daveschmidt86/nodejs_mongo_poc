let express = require('express');
let v1router = express.Router();

const personRoute = require('./person');

v1router.use((req, res, next) => {
    req.api_version = 'v1';
    next();
});

v1router.use('/person', personRoute);

module.exports = v1router;
