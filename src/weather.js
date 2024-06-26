import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

function WeatherDisplay({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const apiKey =  '9fb4b1ec478c718ebf8daf5d8d38e4b9';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        setWeatherData(response.data);

        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
        );
        setForecastData(forecastResponse.data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, [city, apiKey]);

  const renderForecast = () => {
    if (!forecastData) return null;

    const dailyForecasts = forecastData.list.filter((item, index) => index % 8 === 0); // Get forecast for every 24 hours (8 forecasts per day)

    return (
      <div className='forecast-container'>
        {dailyForecasts.map((forecast, index) => (
          <div key={index} className='forecast-item'>
            <div>{new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</div>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              alt={forecast.weather[0].description}
              className='forecast-img'
            />
            <div><span className='max'>{Math.round(forecast.main.temp_max)}°|</span>
             <span className='min'>{Math.round(forecast.main.temp_min)}°</span>
             </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='weather-display'>
      {weatherData && (
        <div className='current-weather'>
          <h2 className='city-name'>{weatherData.name}, {weatherData.sys.country}</h2>
          <div>
            <div className='temperature'>
            <p id='temp'>{Math.round(weatherData.main.temp)}
            <span id='unit'>°C</span>
            </p>
            </div>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].description}
              className='current-img'
            />
            <p id='define'>{weatherData.weather[0].description}</p>
            <div className='humidity-wind'>
            <p className='humidity'>🌡️Humidity: {weatherData.main.humidity}%</p>
            <p className='wind'>🌫️Wind Speed: {Math.round(weatherData.wind.speed)} km/h</p>
            </div>
          </div>
        </div>
      )}
      {forecastData && (
        <div>
          <div className='forecast-container'>
            {renderForecast()}
          </div>
        </div>
      )}
      <p className="link">
        This project was coded by Gabo John
        {" "}
        <a href="https://github.com/GaboJohnK/react-App" target="_blank" 
        rel="noopener noreferrer">
          open-sourced on GitHub 
        </a>{" "}
        and hosted on {' '}
        <a href='https://dancing-horse-bb55ec.netlify.app/' target='_blank' 
        rel='noopener noreferrer'> Netlify</a> 
      </p>
    </div>
  );
}

export default WeatherDisplay;
