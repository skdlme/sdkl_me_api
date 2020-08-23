var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
const {
  performance//,
  // PerformanceObserver
} = require('perf_hooks');

// Get the available API versions or supported versions from Environment Variable
var api_versions = (process.env.API_VERSIONS || 'beta,v1,v2').split(',');

let PreProcess = function (req, res, caller) {
  if(!res.headersSent){
    res.append('X-Params', Buffer.from(JSON.stringify(req.params)).toString());
    res.append('X-Method', Buffer.from(JSON.stringify(caller)).toString());
    
    // Capture the request start time
    res.locals.startTime=performance.now()
  }
};

let PostProcess = function (req, res, caller,buffer) {
  res.locals.endTime=performance.now()
  res.locals.duration=`${Number.parseFloat((res.locals.endTime-res.locals.startTime)).toPrecision(4)} Milliseconds`

  if(!res.headersSent){
    if(res.locals.startTime)
      res.append('X-Duration', Buffer.from(res.locals.duration));    
  }
  
  res.send(res.locals.duration)
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