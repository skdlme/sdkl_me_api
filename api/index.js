var express = require('express');
var router = express.Router();

var api_v1 = require('./v1');

var v1 = router.use('/v1',api_v1);

module.exports = router;
