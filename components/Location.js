import React from 'react';
import WeatherCard from './WeatherCard';

const Location = ({ data, location, setLocation }) => {
  const foundCity = data.find(cityObj => cityObj.city === location);

  if (!foundCity) {
    return <p>Location not found.</p>;
  }

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
      {foundCity && ( // Only display the WeatherCard if foundCity is not null
        <WeatherCard
          city={foundCity.city}
          temperature={foundCity.temperature}
          forecast={foundCity.forecast}
        />
      )}
    </div>
  );
};

export default Location;