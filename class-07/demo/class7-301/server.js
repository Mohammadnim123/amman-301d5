'use strict';

const express = require('express');

//CORS = Cross Origin Resource Sharing
const cors = require('cors');

//DOTENV (read our enviroment variable)
require('dotenv').config();

const superagent = require('superagent');

const PORT = process.env.PORT || 3030;

const app = express();

app.use(cors());

app.get('/', (request, response) => {
    response.status(200).send('you did a great job');
});

//http://localhost:3000/location?city=Lynnwood
app.get('/location', (req, res) => {
    // console.log(city);
    // // res.send('you are in thr location route');
    // const geoData = require('./data/geo.json');
    // console.log(geoData);
    // const locationData = new Location(city, geoData);
    // res.send(locationData);
    const city = req.query.city;
    let key = process.env.LOCATIONIQ_KEY;
    let url = `https://eu1.locationiq.com/v1/search.php?key=${key}&q=${city}&format=json`;
    // console.log(url);

    // $.get('./data/page-1.json')
    // .then(data=>{
    //     console.log(data)
    // })

    console.log('before superagent');
    superagent.get(url)
        .then(geoData => {
            console.log('inside superagent');
            // console.log(geoData.body);
            const locationData = new Location(city, geoData.body);
            // console.log(locationData);
            res.status(200).json(locationData);
        });

    console.log('after superagent');

});

function Location(city, geoData) {
    this.search_query = city;
    this.formatted_query = geoData[0].display_name;
    this.latitude = geoData[0].lat;
    this.longitude = geoData[0].lon;
}

// //http://localhost:3000/weather
// app.get('/weather', (req, res) => {
//     const geoData = require('./data/weatherbit.json');
//     console.log(geoData);
//     var weatherDaily = [];
//     geoData.data.forEach(val => {
//         var weatherData = new Weather(val);
//         weatherDaily.push(weatherData);
//     });
//     res.send(weatherDaily);
// });

// function Weather(day) {
//     this.forecast = day.weather.description;
//     this.time = new Date(day.datetime).toString().slice(0, 15);
// }

app.get('*', (req, res) => {
    res.status(404).send('Not Found');
});

app.use((error, req, res) => {
    res.status(500).send(error);
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
