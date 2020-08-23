    module.exports = (PreProcess, PostProcess) => {
        return {
            DeleteAclRule: function (req, res, next) {
                PreProcess(req, res, "DeleteAclRule");
                res.write('TODO');
                PostProcess(req, res, "DeleteAclRule");
            },

            GetAclRule: function (req, res, next) {
                PreProcess(req, res, "GetAclRule");
                // res.send('TODO');
                res.set('Content-Type', 'text/html')
                setTimeout(() => {  PostProcess(req, res, "GetAclRule",Buffer.from("Hello World!")); }, 2000);
                // PostProcess(req, res, "GetAclRule",Buffer.from("Hello World!"));
            },
            CreateAclRule: function (req, res, next) {
                PreProcess(req, res, "CreateAclRule");
                res.send('TODO');
                PostProcess(req, res, "CreateAclRule");
            },

            GetAclList: function (req, res, next) {
                PreProcess(req, res, "GetAclList");
                res.send('TODO');
                PostProcess(req, res, "GetAclList");
            },
            UpdateAclRule: function (req, res, next) {
                PreProcess(req, res, "UpdateAclRule");
                res.send('TODO');
                PostProcess(req, res, "UpdateAclRule");
            },
            ReplaceAclRule: function (req, res, next) {
                PreProcess(req, res, "ReplaceAclRule");
                res.send('TODO');
                PostProcess(req, res, "ReplaceAclRule");
            },
            WatchAclList: function (req, res, next) {
                PreProcess(req, res, "WatchAclList");
                res.send('TODO');
                PostProcess(req, res, "WatchAclList");
            },



        }
    }