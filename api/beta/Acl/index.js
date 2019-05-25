
const PrepareResponse = function (req,res,caller) {
    res.set('X-Params', Buffer.from(JSON.stringify(req.params)).toString());
    res.set('X-Method', Buffer.from(JSON.stringify(caller)).toString());
    
};

this.DeleteAclRule = function (req, res, next) {
    PrepareResponse(req, res,"DeleteAclRule");
    res.status(200).send();
};
this.GetAclRule = function (req, res, next) {
    PrepareResponse(req, res, "GetAclRule");
    res.send('TODO');
};
this.CreateAclRule = function (req, res, next) {
    PrepareResponse(req, res, "CreateAclRule");
    res.send('TODO');
};

this.GetAclList = function (req, res, next) {
    PrepareResponse(req, res, "GetAclList");
    res.send('TODO');
};
this.UpdateAclRule = function (req, res, next) {
    PrepareResponse(req, res, "UpdateAclRule");
    res.send('TODO');
};
this.ReplaceAclRule = function (req, res, next) {
    PrepareResponse(req, res, "ReplaceAclRule");
    res.send('TODO');
};
this.WatchAclList = function (req, res, next) {
    PrepareResponse(req, res, "WatchAclList");
    res.send('TODO');
};

this.routes = [
    {
        Path: "/calendars/:calendarId/acl/:ruleId",
        Function: this.GetAclRule,
        Method: "get"
    },
    {
        Path: "/calendars/:calendarId/acl/:ruleId",
        Function: this.DeleteAclRule,
        Method: "delete"
    },
    {
        Path: "/calendars/:calendarId/acl/:ruleId",
        Function: this.UpdateAclRule,
        Method: "patch"
    },
    {
        Path: "/calendars/:calendarId/acl/:ruleId",
        Function: this.ReplaceAclRule,
        Method: "put"
    },
    {
        Path: "/calendars/:calendarId/acl/",
        Function: this.CreateAclRule,
        Method: "post"
    },
    {
        Path: "/calendars/:calendarId/acl/",
        Function: this.GetAclList,
        Method: "get"
    },
    {
        Path: "/calendars/:calendarId/acl/watch",
        Function: this.WatchAclList,
        Method: "post"
    }
];
