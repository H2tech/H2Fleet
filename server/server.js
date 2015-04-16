
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

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})

