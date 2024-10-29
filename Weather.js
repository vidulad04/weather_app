import React,{useState} from 'react';
import axios from 'axios';

export default function Weather() {
    const [weather, setWeather]= useState();
    const [city, setCity] = useState();
    const handleCityChange= (event)=>{
        setCity(event.target.value)
    }

    const fetchWeather= async () =>{
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'f224e9608d7f2c622f20196bd4d915eb'}`);
            setWeather(response);
        }
        catch(error){
                console.log("error fetching the data", error);
        }
    }
    console.log(weather, 'weather');
    const handleClick=()=>{
        fetchWeather();
    }
  return (
    <div className='weather-container'>
        <input type='text' placeholder="Enter city name" value={city} onChange=
        {handleCityChange}/>
        <button onClick={handleClick}>Get Weather</button>
        {weather && <>
        <div className='weather-info'>
            <h3>{weather.data.name}</h3>
            <p>Temperature is{weather.data.main.temp}</p>
            <p>{weather.data.weather[0].description}</p>
            </div>
            </>}
    </div>
  )
}
