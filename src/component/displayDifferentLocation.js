import React, { useEffect, useState } from "react";
import axios from "axios";
import "./design.css";


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

  const handleChange1 = (event1) => {
    console.log(event1.target.value);
    setCity(event1.target.value);
    setValue(event1.target.value);
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

  const changeSelectOptionHandler1 = (event1) => {
    setSelected(event1.target.value);
  };
//Europe
  const UK = ["Choose City", "London", "Manchester", "Birmingham", "Glasgow"];
  const France = ["Choose City", "Paris", "Calais", "Lyon", "Nice"];
  const Spain = ["Choose City", "Barcelona", "Madrid", "Córdoba", "Seville "];

  //Asia
  const China = ["Choose City", "Beijing", "Shanghai", "Hong Kong", "Macau"];
  const India = ["Choose City", "Delhi", "Chennai", "Madras", "Luknow"];
  const Kazakhstan = ["Choose City", "Astana", "Almaty", "Shymkent", "Atau"];

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
  }else if (selected === "Kazakhstan") {
    type = Kazakhstan;
  }else if (selected === "India") {
    type = India;
  }else if (selected === "China") {
    type = China;
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
      <div className="page">
        <div className="europe">
          <ul>
            <p1 style={{fontSize:32}}>Europe</p1>
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
           <p className="city"> City:{` ${value}`}</p>
           <br></br>
            <p>Humidity: {weatherData?.main.humidity}</p>
            <p>Temp: {weatherData?.main.temp}</p>
            <p>Feels Like: {weatherData?.main.feels_like}</p>
            <p>Wind: {weatherData?.wind.speed}</p>
          </ul>
        </div>

        <div className="asia">
          <ul>
            <p style={{fontSize:32}}>Asia</p>
            <select onChange={changeSelectOptionHandler1}>
              <option>Choose Country</option>
              <option>China</option>
              <option>India</option>
              <option>Kazakhstan</option>
            </select>
            <p>
              <select name="city2" value={value} onChange={handleChange1}>
                {
                  /** This is where we have used our options variable */
                  options
                }
              </select>
            </p>
           <p className="city2"> City:{` ${value}`}</p>
           <br></br>
            <p>Humidity: {weatherData?.main.humidity}</p>
            <p>Temp: {weatherData?.main.temp}</p>
            <p>Feels Like: {weatherData?.main.feels_like}</p>
            <p>Wind: {weatherData?.wind.speed}</p>
          </ul>
        </div>

      </div>
    </form>
  );
}

export default DisplayDifferentLocation;
