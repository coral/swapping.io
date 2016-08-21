'use strict'
/**
 * Module dependencies.
 */

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer');

var upload = multer({dest: 'data/'});

var config = require('config');

var io = null;
var server = null;

exports.start = function()
{
    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/', express.static('static'));
    app.use('/components', express.static("bower_components"));

    require('../routes/index')(app);

    // Error handler
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
            res.json({
            message: err.message,
            error: (app.get('env') === 'development' ? err : {})
            });
        next(err);
    });

    app.post('/post' , upload.single('asd'), function (req, res, next) {
        console.log(req);
        res.send('HELLO');
    });

    var server = require('http').createServer(app);

    server.listen(config.get('server.port'));
}
