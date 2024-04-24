import React, {useState, useEffect } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import TopCities from './topCities';
import Inputs from './input';
import Timedate from './timedate';
import WeatherDisplay from './weather';
import spinLoader from './spin.gif';


function App() {
   const topCities = [
    { id: 1, title: 'Lagos' },
    { id: 2, title: 'London' },
    { id: 3, title: 'Paris' },
    { id: 4, title: 'Durban' },
  ];

  const defaultCity = 'Gaborone';

   const [selectedCity, setSelectedCity] = useState('');
   const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    setSelectedCity(defaultCity);
  }, []);  

  useEffect(() => {
    setLoading(true);
  }, [selectedCity]);

  const handleCitySearch = (city) => {
    setSelectedCity(city);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

useEffect(() => {
    const timeout = setTimeout(() => {
  setLoading(false);
  }, 2000);

  return () => clearTimeout(timeout);
  }, [selectedCity]);  

  return (
    <div className="weather-card">
    <TopCities cities={topCities} onCityClick={handleCityClick}/>
    <Inputs onSearch={handleCitySearch} /> 
    <Timedate />

 {loading ? (
        <div className="loading">
          <img src={spinLoader} alt="Loading..."
          style={{width: '80px', height: '60px'}} />

          <p>Loading...</p>
        </div>
      ) : (

     selectedCity && <WeatherDisplay city={selectedCity} />
      )}
    </div>
     
  );
}

export default App;
