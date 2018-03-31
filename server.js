const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3030;
const index = path.join(__dirname + '/dist/index.html');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

app.use('/styles', express.static(__dirname + '/dist/styles'));
app.use('/scripts', express.static(__dirname + '/dist/scripts'));
app.use('/fonts', express.static(__dirname + '/dist/fonts'));
app.use('/locales', express.static(__dirname + '/dist/locales'));
app.use('/maps', express.static(__dirname + '/dist/maps'));
app.use('/app', express.static(__dirname + '/dist/app'));
//Parse post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.get('/', function (req, res) {
    res.sendFile(index);
});

app.listen(port, function () { console.log('Listening on ' + `${port}`) });