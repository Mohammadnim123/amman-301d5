'use strict';

//load the dependencies
require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const pg = require('pg');
const { response } = require('express');

//Application setup
const app = express();
app.use(cors());
const PORT = process.env.PORT;
const client = new pg.Client(process.env.DATABASE_URL);
// client.connect()


// ROUTES
app.get('/test', (request, response) => {
    response.status(200).send('ok'); 
});

// localhost:3000/people
app.get('/people',(req,res)=>{
    let SQL = `SELECT * FROM person;`;
    client.query(SQL)
    .then(results=>{
        res.status(200).json(results.rows);
    })
    .catch (error => errorHandler(error));
});


// localhost:3000/add?first=Razan&last=Quran
app.get('/add',(req,res)=>{
    let firstName = req.query.first;
    let lastName = req.query.last;
    let SQL = `INSERT INTO person (first_name,last_name) VALUES ($1,$2)`;
    let safeValues = [firstName,lastName];

    client.query(SQL,safeValues)
    .then(results =>{
        res.status(200).json(results.rows);
    })

});

// localhost:3000/update?last=Quran
app.get('/update',(req,res)=>{
    let lastName = req.query.last;
    let SQL = `UPDATE person SET last_name=$1 WHERE last_name='Swedani'`;
    let safeValues = [lastName];
    client.query(SQL,safeValues)
    .then(results =>{
        res.status(200).json(results.rows);
    })
})


// Error Handler
app.get('*', notFoundHandler);

//let's have another function to handle any errors
app.use(errorHandler);

function notFoundHandler(request,response) { 
    response.status(404).send('huh????');
}

function errorHandler(error, request, response) {
    response.status(500).send(error);
}


client.connect()
.then(()=>{
    app.listen(PORT, () =>
    console.log(`listening on ${PORT}`)
    );
})


