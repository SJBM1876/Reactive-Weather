import React from 'react';
import WeatherCard from './components/WeatherCard';
import cities from './data';

function App() {
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
    </>
  );
}

export default App;