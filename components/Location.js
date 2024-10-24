import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';

const Location = ({ data, location, setLocation }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        );

        // Check if the response is not successful
        if (!response.ok) {
          throw new Error(`Error fetching weather data: ${response.status} - ${response.statusText}`);
        }

        const weatherData = await response.json();
        setWeatherData(weatherData);
        setError(null); // Clear any previous error
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Unable to fetch weather data. Please try again later.');
      }
    };

    // Fetch weather data whenever the location changes
    fetchWeather();
  }, [location]);

  return (
    <div className="location">
      <h2>My Location</h2>
      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        {data.map((cityData, index) => (
          <option key={index} value={cityData.city}>
            {cityData.city}
          </option>
        ))}
      </select>
      {error ? (
        <p>Error: {error}</p>
      ) : weatherData ? (
        <WeatherCard
          city={weatherData.name}
          temperature={weatherData.main.temp}
          forecast={weatherData.weather[0].main}
        />
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Location;
