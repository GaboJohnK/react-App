import React, {useState, useEffect } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import TopCities from './topCities';
import Inputs from './input';
import Timedate from './timedate';
import WeatherDisplay from './weather';


function App() {
   const topCities = [
    { id: 1, title: 'Lagos' },
    { id: 2, title: 'London' },
    { id: 3, title: 'Paris' },
    { id: 4, title: 'Durban' },
  ];

  const defaultCity = 'Gaborone';

   const [selectedCity, setSelectedCity] = useState('');

  
  useEffect(() => {
    setSelectedCity(defaultCity);
  }, []);  

  const handleCitySearch = (city) => {
    setSelectedCity(city);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="weather-card">
    <TopCities cities={topCities} onCityClick={handleCityClick}/>
    <Inputs onSearch={handleCitySearch} /> 
    <Timedate />
     {selectedCity && <WeatherDisplay city={selectedCity} />}
    </div>
     

  );
}

export default App;
