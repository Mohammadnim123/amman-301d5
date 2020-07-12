'use strict';
require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.use(express.static('./public'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// app.get('/getData',(req,res)=>{
//     console.log('Get request',req.query);
//     // res.status(200).send(req.query);
//     res.redirect('/welcome.html');
// })

app.post('/getData',(req,res)=>{
    console.log('Get request',req.body);
    // res.status(200).send(req.query);
    res.redirect('/welcome.html');
})

app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})
