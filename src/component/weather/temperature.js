import React, { useEffect, useState } from 'react';
import './style.css';
import Weathercard from './weatherCard'

const Temperature = () => {

    const [searchValue, setSearchValue] = useState("pune");
    const [tempInfo, setTempInfo] = useState({});
  
    const getWeatherInfo = async () => {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=8fc80a477d02689e389e3e78e2f321e9`;
  
        let res = await fetch(url);
        let data = await res.json();
  
        const { temp, humidity, pressure } = data.main;
        const { main: weathermood } = data.weather[0];
        const { name } = data;
        const { speed } = data.wind;
        const { country, sunset } = data.sys;
  
        const myNewWeatherInfo = {
          temp,
          humidity,
          pressure,
          weathermood,
          name,
          speed,
          country,
          sunset,
        };
  
        setTempInfo(myNewWeatherInfo);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getWeatherInfo();
    }, []);
  
    return (
      <>
        <div className="wrap">
          <div className="search">
            <input
              type="search"
              placeholder="search..."
              autoFocus
              id="search"
              className="searchTerm"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
  
            <button
              className="searchButton"
              type="button"
              onClick={getWeatherInfo}>
              Search
            </button>
          </div>
        </div>
  
        {/* our temp card  */}
        {/* <Weathercard tempInfo={tempInfo} /> */} //old way of passing props
        <Weathercard {...tempInfo} />

    </>
  )
};

export default Temperature
