import React, { useEffect, useState, Select } from "react";
import axios from "axios";
import "./design.css";
import Dropdown from "./DropDown";


function DisplayDifferentLocation(title, options, searchCities) {  

  const [city, setCity] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [country, setCountry] = useState();
   
  
    const [selected, setSelected] = useState("");
  
    const getWeatherData = (selectedCity) => {
      if (selectedCity) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&appid=08acd577f8ab8cabf637f7cd3736a629`;
        axios.get(url).then((response) => {
          setWeatherData(response.data);
          console.log(response.data);
          setIsLoading(false);
        });
      }
    };
  
    useEffect(() => {}, [searchCities]);
  
    const handleChange = (event) => {
      console.log(event.target.value);
      setCity(event.target.value);
      setValue(event.target.value);
    };
  
    const getInitialState = () => {
      const value = "No City";
      return value;
    };
  
    const [value, setValue] = useState(getInitialState);



  return (
    <div className="container">
      <p> Choose the Country & City from each Location</p>
    <div className="europe">
      <Dropdown title="Europe" options={["UK", "France", "Spain"]} />
</div>

<div className="asia">
      <Dropdown title="Asia" options={["China", "India", "Kazakhstan"]} />
    </div>

    <div className="africa">
      <Dropdown title="Africa" options={["Morocco", "Egypt", "South Africa", "Somalia", "Nigeria"]} />
    </div>

    <div className="america">
      <Dropdown title="America" options={["USA", "Canada"]} />
    </div>

    </div>
  );
}

export default DisplayDifferentLocation;
