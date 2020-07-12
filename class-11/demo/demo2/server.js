'use strict';
require('dotenv').config();

const express = require('express');
const superagent = require('superagent');

const app = express();
const PORT = process.env.PORT;

app.use(express.static('./public'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    // res.status(200).send('hi there');
    res.render('index');
})

app.get('/list',(req,res)=>{
    let family =['Atallah','Ali','Zaid','Noor','Eman'];
    res.render('familyList',{familyData: family}); //key:value
});

app.get('/books',(req,res)=>{
    let url = `https://www.googleapis.com/books/v1/volumes?q=dogs`;
    superagent.get(url)
    .then (dogsData =>{
        console.log(dogsData.body.items)
        res.render('booksData',{dogData: dogsData.body });
    })
})

app.get('*',(req,res)=>{
    res.status(404).send(`This route doesn't exist`);
})

app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})