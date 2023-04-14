import React, { useEffect } from "react";
import axios from "axios";


import { useState } from "react";

function DisplayDifferentLocation({ searchCities }) {
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
  useEffect(() => {
    if (city) {
      setIsLoading(true);
      getWeatherData(city);
    }
  }, [city]);

  const handleSubmit = (event) => {};

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  const UK = ["Choose City", "London", "Manchester", "Birmingham", "Glasgow"];
  const France = ["Choose City", "Paris", "Calais", "Lyon", "Nice"];
  const Spain = ["Choose City", "Barcelona", "Madrid", "Córdoba", "Seville "];

  /** Type variable to store different array for different dropdown */
  let type = null;

  /** This will be used to create set of options that user will see */
  let options = null;

  if (selected === "UK") {
    type = UK;
  } else if (selected === "France") {
    type = France;
  } else if (selected === "Spain") {
    type = Spain;
  }

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  const getInitialState = () => {
    const value = "No City";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  if (isLoading) {
    return <h2>Still Loading be patient</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <ul>
            <p>Europe</p>
            <select onChange={changeSelectOptionHandler}>
              <option>Choose Country</option>
              <option>UK</option>
              <option>France</option>
              <option>Spain</option>
            </select>
            <p>
              <select name="city" value={value} onChange={handleChange}>
                {
                  /** This is where we have used our options variable */
                  options
                }
              </select>
            </p>
            <h3 style={{ color: "red" }}>You have chosen:{` ${value}`}</h3>
            <h3>Humidity: {weatherData?.main.humidity}</h3>
            <h3>Temp: {weatherData?.main.temp}</h3>
          </ul>
        </div>
      </div>
    </form>
  );
}

export default DisplayDifferentLocation;
