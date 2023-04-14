
import React from "react";
import axios from "axios";
import "../App.css";

import { useState } from "react";

function searchCitites({setLocation}){

    const [data, setData] = useState({});
   
    const [newSearchTerm, setNewSearchTerm] = useState('');

  
    const handleChange = (event) =>{
        setLocation(event.target.value);
      
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setLocation(newSearchTerm);
        setNewSearchTerm('');
    }

  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=08acd577f8ab8cabf637f7cd3736a629`
  
    const searchLocation = (event) =>{
      if(event.key ==='Enter'){
        axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
        console.log(data.weather)
      })
      setLocation('')
      }
      
    }

    return(
        <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"/>

      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p> {data.name} </p>
          </div>
          <div className="temp">
            {data.main ? <h1>{Math.round(data.main.temp)} Celsius</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
      
      {data.name !=undefined &&
       <div className="bottom">
          <div className="feels">
          {data.weather ? <p>{Math.round(data.main.feels_like)}</p> : null}

            <p> Feels like</p>
          </div>
          <div className="humdity">
          {data.weather ? <p>{data.main.humidity}</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
          {data.weather ? <p>{data.wind.speed}</p> : null}
            <p> Wind Speed</p>
          </div>
        </div>
      }
       
      </div>
    </div>
  );
    

}

export default searchCitites
