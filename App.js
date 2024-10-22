import React, { useState }from 'react';
import WeatherCard from './components/WeatherCard';
import Location from './components/Location';
import cities from './data';

function App() {
    //  Create a state variable for location
  const [location, setLocation] = useState('London'); 
  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      
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