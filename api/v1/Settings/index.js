var express = require('express');
var router = express.Router();



const getStatus = function(req,res,next){
    res.send('OK');
    next();
}

router.use('/settings-status',getStatus);

module.exports = router;
