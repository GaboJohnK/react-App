import React from 'react';
import "./styles.css";

function TopCities({ cities, onCityClick}) {
   
  return (
    <div className= "cities-list">
        {cities.map((city) => (
        <button key={city.id} onClick={() => onCityClick(city.title)}>
            {city.title}</button>
    ))}
    </div>
  );
}
export default TopCities;