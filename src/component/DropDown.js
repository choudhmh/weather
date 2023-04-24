import React, { useEffect, useState } from "react";
import axios from "axios";
import "./design.css";

function Dropdown({title, options, searchCities}){
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState();
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [selected, setSelected] = useState("");

  const getWeatherData = (selectedCity) => {
    console.log(city, 'city')
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

 

  useEffect(() => {
    if (city) {
      setIsLoading(true);
      getWeatherData(city);
    }
  }, [city]);

 
  const cities = {
    UK: ["London", "Manchester", "Birmingham", "Glasgow"],
    France: ["Paris", "Calais", "Lyon", "Nice"],
    Spain: ["Barcelona", "Madrid", "Córdoba", "Seville "],
    China: ["Beijing", "Shanghai", "Hong Kong", "Macau"],
    India: ["Delhi", "Chennai", "Madras", "Luknow"],
    Kazakhstan: ["Astana", "Almaty", "Shymkent", "Atau"],
    Australia: ["Canberra", "Sydney", "Melbourne", "Brisbane","Darwin"],
    NewZealand:["Auckland", "Wellington", "Hamilton", "Christchurch"],
    USA:["Washington", "New York", "California", "Florida"],
    Morocco:["Rabat", "Casablanca", "Marrakesh","Tangier"]
  };


  const getInitialState = () => {
    const value = "No City";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  if (isLoading) {
    return <h2>Still Loading be patient</h2>;
  }

  return (
    
    <div className={title}>
    <h1 style={{ fontSize: 32, width: "100%" }}>{title}</h1>
    <select onChange={(e) => setCountry(e.target.value)}>
      <option>Choose Country</option>
      {options?.map((opt) => (
        <option value={opt} key={opt}>
          {opt}
        </option>
      ))}
    </select>

    <p>
      <select name="city" value={city} onChange={handleChange}>
        <option key="choose city">Choose City</option>
        {cities[country]?.map((c) => (
          <option value={c} key={c}>
            {c}
          </option>
        ))}
      </select>
    </p>
    <p className="city"> City:{` ${value}`}</p>
    <br></br>
    <p>Humidity: {weatherData?.main?.humidity}</p>
    <p>Temp: {weatherData?.main?.temp}</p>
    <p>Feels Like: {weatherData?.main?.feels_like}</p>
    <p>Wind: {weatherData?.wind?.speed}</p>
  </div>

  );
}
  export default Dropdown;