var express = require('express');
var router = express.Router();

const PrepareResponse = function(req,res,next){
    res.set('X-Debug',new Buffer(JSON.stringify(req.params)).toString('base64'));
}

const DeleteAclRule = function (req, res,next) {
    PrepareResponse(req,res,next);
    res.send('TODO');
    next();
};
const GetAclRule = function (req, res, next) {
    PrepareResponse(req,res,next);
    res.send('TODO');
    next();
};
const CreateAclRule = function (req, res, next) {
    PrepareResponse(req,res,next);
    res.send('TODO');
    next();
};

const GetAclList = function (req, res, next) {
    PrepareResponse(req,res,next);
    res.send('TODO');
    next();
};
const UpdateAclList = function (req, res, next) {
    PrepareResponse(req,res,next);
    res.send('TODO');
    next();
};
const ReplaceAclList = function (req, res, next) {
    PrepareResponse(req,res,next);
    res.send('TODO');
    next();
};
const WatchAclList = function (req, res, next) {
    PrepareResponse(req,res,next);
    res.send('TODO');
    next();
};


// GET  /calendars/calendarId/acl/ruleId	Returns an access control rule.
// DELETE  /calendars/calendarId/acl/ruleId	Deletes an access control rule.
router.route('/calendars/:calendarId/acl/:ruleId')
    .get(GetAclRule)
    .delete(DeleteAclRule);

// POST  /calendars/calendarId/acl	        Creates an access control rule.
router.route('/calendars/:calendarId/acl')
    .post(CreateAclRule)


// GET  /calendars/calendarId/acl	        Returns the rules in the access control list for the calendar.
router.route('/calendars/:calendarId/acl/')
    .get(GetAclList)

// PATCH  /calendars/calendarId/acl/ruleId	Updates an access control rule. This method supports patch semantics.
// PUT  /calendars/calendarId/acl/ruleId	Updates an access control rule.
router.route('/calendars/:calendarId/acl/:ruleId')
    .patch(UpdateAclList)
    .put(ReplaceAclList)

// POST  /calendars/calendarId/acl/watch	Watch for changes to ACL resources.
router.route('/calendars/:calendarId/acl/watch')
    .post(WatchAclList)


const getStatus = function (req, res, next) {
    res.send('OK');
    next();
}

router.use('/acl-status', getStatus);

module.exports = router;
