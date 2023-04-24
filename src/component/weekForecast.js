import React, { useState, useEffect } from "react";
import axios from "axios";



const WeekForecast = () => {

    const [data, setData] = useState({});
const [location, setLocation] = useState('')

const apiKey = "08acd577f8ab8cabf637f7cd3736a629";
const url = `http://api.openweathermap.org/data/2.5/forecast?&q=${location},uk&APPID=${apiKey}`;

  const [weatherInfo, setWeatherInfo] = useState(null);

  const searchLocation = (event) =>{
    if(event.key ==='Enter'){
      axios.get(url).then((response) =>{
      setData(response.data)
      console.log(response.data)
    //   console.log(data.weather)
    })
    setLocation('')
    }
    
  }
  return (
    <div className="app">
    <div className="search">
      <input 
      value={location}
      onChange={event => setLocation(event.target.value)}
      onKeyPress={searchLocation}
      placeholder="Enter Location"
      type="text"/>
    <div>

    <div className="city">
        {data.city?.name}
         </div> 

      {weatherInfo &&
        weatherInfo.list.map((forecast, i) => (
          <div key={i}>
            <h4>{forecast.dt_txt}</h4>
            <ul>
              <li>Temperature: {Math.round(forecast.main?.temp)}</li>
              {/* <li>Humidity: {forecast.main.humidity}</li> */}
            </ul>
           
          </div>
          
        ))}
    </div> 
    </div>
    </div>
  );
};

export default WeekForecast;