
var path = require('path');
var express = require('express');
var expresshandlebars = require('express-handlebars')
var bodyParser = require("body-parser")
var app = express();
var port = process.env.PORT || 3000;
var equationData = require('./equationData');
console.log("equationData", equationData);


app.use(bodyParser.json());
app.use(express.static('public'));