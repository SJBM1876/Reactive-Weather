import React from 'react';
import WeatherCard from './WeatherCard';
import { useState } from 'react'; // Import useState for state management

const Location = ({ data, location, setLocation }) => {
  const [currentWeather, setCurrentWeather] = useState(null); // Initialize state for current weather. Initially set to null. This will hold the weather data for the selected location.

  // Use React.useEffect to fetch or update weather data based on location changes
  React.useEffect(() => {
    const foundCity = data.find(cityObj => cityObj.city === location); //Use .find to search the data array for the city object matching the current location.
    setCurrentWeather(foundCity);
  }, [data, location]); // Re-run effect when data or location changes


  
// Define a handleLocationChange function to handle user selections on the dropdown. This updates the location state based on the selected value.
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="location">
      <h2>My Location</h2>
      <select value={location} onChange={handleLocationChange}>
        {data.map((cityData, index) => (
          <option key={index} value={cityData.city}>
            {cityData.city}
          </option>
        ))}
      </select>
      {currentWeather && (
        <WeatherCard
          city={currentWeather.city}
          temperature={currentWeather.temperature}
          forecast={currentWeather.forecast}
        />
      )}
    </div>
  );
};

export default Location;
