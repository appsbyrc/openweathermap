// src/Weather.js

import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [zipCode, setZipCode] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const API_KEY = 'yourApiKeyhere';
    const API_URL = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/`;

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`${API_URL}${zipCode}?apikey=${API_KEY}&metric=true`);
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const handleChange = (e) => {
        setZipCode(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={zipCode} onChange={handleChange} placeholder="Enter ZIP code" />
                <button type="submit">Get Weather</button>
            </form>
            {weatherData && (
                <div>
                    <h2>Weather for {weatherData.Headline.EffectiveDate}</h2>
                    <p>{weatherData.Headline.Text}</p>
                    {/* Display additional weather data as needed */}
                </div>
            )}
        </div>
    );
};

export default Weather;
