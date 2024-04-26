import React, { useState } from 'react';
import axios from 'axios';

const WeatherForm = ({ onWeatherData }) => {
    const [zipCode, setZipCode] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(
                'http://dataservice.accuweather.com/locations/v1/postalcodes/ZIPCODE?apikey=4V1WhGgWgthXisdUU6yY1tHGJvDeW3Hn'

                // `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=&units=metric`
            );
            onWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
            />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default WeatherForm;