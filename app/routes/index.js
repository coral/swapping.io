var changeCase = require('change-case');
var express = require('express');
var routes = require('require-dir')();

module.exports = function(app) {
  'use strict';
  
  Object.keys(routes).forEach(function(routeName) {
    var router = express.Router();

    require('./' + routeName)(router);
    
    app.use('/' + changeCase.paramCase(routeName), router);
  }); 
};