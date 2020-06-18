var express = require('express');
const process = require('process');

var expressapp = express();
expressapp.get('/', function (req, res) {
    // res.send('{"message":"Hello Devops as JSON from a nodejs server REST API v1"}');
    res.send('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Hello-DevOps</title></head><body><H1>Hello DevOps from Node JS</H1></body></html>');    
})
expressapp.listen(80, function () {
    console.log('Ready on port 80');
})

/* To Handle Ctrl C*/
process.on('SIGINT', function () {
    process.exit();
});
