const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
const apiKey = 'd02547b585a6117de4903394c08b5505'; 

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).send({ error: 'City is required' });
    }

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const weatherData = response.data;
        res.send(weatherData);
    } catch (error) {
        res.status(500).send({ error: 'Error fetching weather data' });
    }
});

app.listen(port, () => {
    console.log(`Weather API listening at http://localhost:${port}`);
});