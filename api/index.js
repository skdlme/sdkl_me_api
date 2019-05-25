var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

// Get the available API versions or supported versions from Environment Variable
var api_versions = (process.env.API_VERSIONS || 'beta,v1,v2').split(',');

api_versions.map(api => {

  // Check for valid API package which has modules.json
  // modules.json has individual modules to be loaded from API package
  if (fs.existsSync(path.join(__dirname, api, `modules.json`)))
    var modules = require(path.join(__dirname, api, `modules.json`));

  var routeMap = [];

  if (modules !== undefined) {
    modules.map(m => {
      // try to load individual module and also see if the module has "routes" defined in it
      // If routes, exists then load them up dynamically using eval 
      let module = require(path.join(__dirname, api, m));
      if (module !== undefined && module.routes !== undefined) {
        module.routes.map(r => {
          eval(`router.${r.Method}(${"'/' + api + r.Path"},r.Function);`)
        })
      }

    });
  }



});


module.exports = router;
