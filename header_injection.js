ar express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.writeHead(200, { test: 'foo \r\ninvalid: bar' + req.foo });

    res.set('Content-Type', req.query.foo);
 
    res.set(ffff)
});
