var express = require('express')
const process = require('process');

var expressapp = express()
expressapp.get('/', function (req, res) {
    res.send('{"message":"Hello Devops as JSON from a nodejs server REST API v1"}')
})
expressapp.listen(80, function () {
    console.log('Ready on port 80')
})

/* To Handle Ctrl C*/
process.on('SIGINT', function () {
    process.exit();
});
