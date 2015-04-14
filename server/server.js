
// Modules
var express = require('express');
var app     = express();

var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override')
var http           = require('http');


//===============================================================================
// CONFIGURE environments
// =============================================================================
//var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;
//var ipaddress = process.env.OPENSHIFT_NODEJS_IP   || "127.0.0.1";
//
//if(port === process.env.OPENSHIFT_NODEJS_PORT){
//    app.use(express.static(__dirname + '../../public'));
//}
//else if(port === 8080){
//    app.use(express.static(__dirname + '../../client/src'));
//}

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '../../client/src'));

//===================== MIDDLE WARE ===============
app.use(require('connect-logger')());
app.use(bodyParser());
app.use(methodOverride('X-HTTP-Method-Override'))


//===============================================================================
// DATABASE configuration
// =============================================================================

var db = require('./config/db');
mongoose.connect(db.url);

//===============================================================================
// ROUTES FOR OUR API
// =============================================================================

//===================== MIDDLE WARE ===============

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

//===================== ROUTES ====================

require('./routes/security').addRoutes(router);
require('./routes/user').addRoutes(router);
app.use('/api', router);


//===============================================================================
// start app
// =============================================================================

/*
var server = http.createServer(app);
server.listen(app.get('port'),ipaddress,function(){
    console.log('Express server listening on port ' + port+' IP '+ipaddress);
});

exports = module.exports = app;*/

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})

