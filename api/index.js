var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

// Get the available API versions or supported versions from Environment Variable
var api_versions = (process.env.API_VERSIONS || 'beta,v1,v2').split(',');

let PreProcess = function (req, res, caller) {
  res.set('X-Params', Buffer.from(JSON.stringify(req.params)).toString());
  res.set('X-Method', Buffer.from(JSON.stringify(caller)).toString());
  res.set('X-StartTime', Buffer.from(JSON.stringify(new Date().toUTCString())).toString());
};

let PostProcess = function (req, res, caller) {
 
};

api_versions.map(api => {

  // Check for valid API package which has modules.json
  // modules.json has individual modules to be loaded from API package
  if (fs.existsSync(path.join(__dirname, api, `modules.json`)))
    var modules = require(path.join(__dirname, api, `modules.json`));

  var routeMap = [];

  if (modules !== undefined) {

    Object.keys(modules).map(moduleName => {
      // try to load individual module and also see if the module has "routes" defined in it
      // If routes, exists then load them up dynamically using eval 
      //console.log("Loading module ", moduleName)
      let Module = require(path.join(__dirname, api, moduleName));

      if (typeof Module === "function") {
        let module = Module(PreProcess,PostProcess);
        modules[moduleName].map(route => {
          eval(`router.${route.Method}(${"'/' + api + route.Path"},eval('module.' + route.Function));`)
        });
        ``
      }
    });
  }



});


module.exports = router;