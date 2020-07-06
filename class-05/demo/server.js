'use strict';

//make a variable called express to use the express library
const express = require('express');

// initilize the server
const server = express();

// create a PORT number
const PORT = process.env.PORT || 3000;

server.use(express.static('./public'));

// killall -s KILL node
// http://localhost:3000/test
server.get('/test',(request,response) => {
    response.send('you are doing great!!');
});

// http://localhost:3000/data
server.get('/data',(request,response) => {
    let family = [
        {name:'Atallah'},
        {name:'Messina'},
        {name:'Razan'}
    ];
    response.json(family);
});


server.listen(PORT,()=>{
    console.log('Listening on port',PORT);
});