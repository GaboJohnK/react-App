import React from 'react';
import './styles.css';


function Timedate() {
    const date = new Date();

    const showTime = `${date.getHours()}:${
      date.getMinutes()}`; 

    const showDate = `${date.toLocaleString('default', 
     { weekday: 'long' })}, ${date.getDate()} 
     ${date.toLocaleString('default', { month: 'long' })}
     ${date.getFullYear()}`;   
 
  return (
    <div className='time-date'>
         <h6 className="time"> {showDate} | {' '}Local time:
              {showTime}</h6>
            
    </div>

  );
}

export default Timedate;