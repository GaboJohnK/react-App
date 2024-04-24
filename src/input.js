import React, {useState} from 'react';
import './styles.css';

function Inputs({onSearch}) {
    const [cityInput, setCityInput] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(cityInput);
  };
 
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input id='cityInput' type='text'
                placeholder='Enter city...'
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
                />
                <button id='search-btn' type='submit'>
                    Search
                </button>
            </form>
           
        </div>
    );
}
export default Inputs;