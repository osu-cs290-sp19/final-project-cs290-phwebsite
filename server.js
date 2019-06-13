
var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars')
var bodyParser = require("body-parser")
var MongoClient = require('mongodb').MongoClient;

var app = express();
var port = process.env.PORT || 3008;



var mongoHost ="classmongo.engr.oregonstate.edu";        //process.env.MONGO_HOST;
var mongoPort = 27017        //process.env.MONGO_PORT || 27017;
var mongoUser = "cs290_boeshanr";       //process.env.MONGO_USER;
var mongoPassword = "cs290_boeshanr";      //process.env.MONGO_PASSWORD;
var mongoDBName = "cs290_boeshanr";     //process.env.MONGO_DB_NAME;

var mongoUrl = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
var db = null;

app.engine('handlebars', exphbs({ defaultLayout: 'mainHandle' }));
app.set('view engine', 'handlebars');


/*var equationData = require('./equationData');
console.log("equationData", equationData);*/


app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/', function (req, res, next) {
  res.status(200).render('homePage');
});


app.get('/subjects/:subject', function (req, res, next) {
  var subject = req.params.subject.toLowerCase();
  var collection = db.collection('equations');
  collection.find({ equationContext: subject }).toArray(function (err, equations) {
    if (err) {
      res.status(500).send({
        error: "Error fetching equations from DB"
      });
    } else if (equations.length < 1) {
      next();
    } else {
      if(subject === "kinematics") {
	console.log(equations);
      	res.status(200).render('kinematics', equations);
      }
      else if(subject === "forces") {
        res.status(200).render('forces', equations);
      }
      else {
        res.status(200).render('energy', equations);
      }
	
    }
  });
});

app.post('/subjects/:subject/addEqu', function (req, res, next) {
  var subject = req.params.subject.toLowerCase();
  if (req.body && req.body.Equation) {
    var collection = db.collection('equations');
    var equation = {
	equationContext: subject,     
    	equationText: req.body.Equation,
        variable1: req.body.variables[0],
	variable2: req.body.variables[1],
	variable3: req.body.variables[2],
	variable4: req.body.variables[3]
    };
    collection.updateOne(
      { },
      { $push: {equation} },
      function (err, result) {
        if (err) {
          res.status(500).send({
            error: "Error inserting equation into DB"
          });
        } else {
          console.log("== update result:", result);
          if (result.matchedCount > 0) {
            res.status(200).send("Success");
          } else {
            next();
          }
        }
      }
    );
  } else {
    res.status(400).send("Request needs a body with an equation");
  }
});

app.get('*', function (req, res, next) {
  res.status(404).render('404');
});

MongoClient.connect(mongoUrl, function (err, client) {
  if (err) {
    throw err;
  }
  db = client.db(mongoDBName);
  app.listen(port, function () {
    console.log("== Server listening on port", port);
  });
});







