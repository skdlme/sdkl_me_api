var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var api_versions = (process.env.API_VERSIONS || 'beta,v1,v2').split(',');

api_versions.map(api => {

  if (fs.existsSync(path.join(__dirname, api, `modules.json`)))
    var modules = require(path.join(__dirname, api, `modules.json`));

  var routeMap = [];

  if (modules !== undefined) {
    modules.map(m => {
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
