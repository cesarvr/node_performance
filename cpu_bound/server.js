'use strict';

const express = require('express')
const http = require('http')
const probe = require('probe-mon')

const FIB_MAX = 40;

let count = 0; 
let app = express();

//probe
//app.use(probe());

let fibonacci = function(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

let memoization = function(fn) {
    let cache = {};
    return (num) => {
        if (typeof cache[num] !== 'number') {
            cache[num] = fn(num);
        }

        return cache[num];
    }
}

let memo = memoization(fibonacci);

let warm_up = function() {
    for (let i = 0; i < FIB_MAX; i++) {
        memo(i);
    }
}();

app.get('/fast', function(req, res, next) {
    res.send('fast');
    count ++; 
});

app.get('/fib', function(req, res, next) {
    let n = Math.floor(Math.random() * FIB_MAX) + 1;

    res.send({
        response: {
            'compute:': fibonacci(FIB_MAX),
            'iteration': n
        }
    });

    count ++; 
});

app.get('/sample', function(req, res, next) {
  res.send({'number_request_attended': count});
});

let httpServer = http.createServer(app);

httpServer.listen(8080, function() {
    console.log('listening in ', 8080)
});
