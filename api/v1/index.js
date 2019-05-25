var express = require('express');
var router = express.Router();

var Acl = require('./Acl');
var CalendarList = require('./CalendarList');
var Calendars = require('./Calendars');
var Channels = require('./Channels');
var Colors = require('./Colors');
var Events = require('./Events');
var Freebusy = require('./Freebusy');
var Settings = require('./Settings');

router.use(Acl);
router.use(CalendarList);
router.use(Calendars);
router.use(Channels);
router.use(Colors);
router.use(Events);
router.use(Freebusy);
router.use(Settings);

module.exports = router;
