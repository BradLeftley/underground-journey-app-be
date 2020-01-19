// App.js
'use strict'

const express = require('express')
const app = express()
const https = require('https');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const bodyParser = require('body-parser');


//Endpoints
app.get('/api/fetchJourney', function (req, res) {

//Start station
//End station



  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
  });

});
