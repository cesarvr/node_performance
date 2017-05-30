'use strict'

var fetch = require('node-fetch');
var fs = require('fs');


fs.readFile('../blob/lizard.jpg',
    (err, data) => {
        //console.log('buff? ->', data, 'err ->', err);
      //
        for(var i=0; i<1; i++){
          sendToServer(data.toString('base64'));
        }
    });

function sendToServer(buff) {

    fetch('http://localhost:3001/io', {
        method: 'POST',
        body: JSON.stringify({
            data: buff
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        console.log(res.status);
        console.log(res.statusText);

        return res.text()
    }).then(function(body) {
        console.log('body', body);
    });
}

//setTimeout(() => console.log('bye'), 11000);
