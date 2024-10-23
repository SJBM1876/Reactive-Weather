import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import Location from './components/Location';
import Form from './components/Form'; // Import the new Form component
import cities from './data';

function App() {
  const [location, setLocation] = useState('New York'); // Initial location
  const [typedLocation, setTypedLocation] = useState(''); // New state for user input

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>

      <Form location={location} setLocation={setLocation} typedLocation={typedLocation} setTypedLocation={setTypedLocation} />  {/* Render the Form component */}

      <div className="app">
        {cities.map((cityData, index) => (
          <WeatherCard
            key={index}
            city={cityData.city}
            temperature={cityData.temperature}
            forecast={cityData.forecast}
          />
        ))}
      </div>

      <Location data={cities} location={location} setLocation={setLocation} />
    </>
  );
}

export default App;