'use strict';

const express = require('express');
const app = express();
const stream = require('stream');
const bodyParser = require('body-parser')
const fs = require('fs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json({
    limit: 1024 * 1024
}))

app.get('/io', function(req, res) {
    res.status(200).send({
        hello: 'from services'
    });
});

app.post('/io', function(req, res) {

    var base_64 = Buffer.from(req.body.data, 'base64')

    fs.writeFile(
        './dump_/file' + new Date().getTime() + '.jpg',
        base_64,
        (err) => {
            if (err)
                res.status(500).send('error saving file');

            res.status(200).send('fine');
        });

    base_64 = null;
    req.body.data = null;
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
