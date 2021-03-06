import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import Context from "../Context";

const Main = () => {
  const [weather, setWeather] = useState();
  const api_call = async e => {
    e.preventDefault();
    const location = e.target.elements.location.value
    const API_KEY = "api...";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    const request = axios.get(url);
    const response = await request;
    setWeather(response.data.main);
  };
  weather && console.log(weather);

  return (
    <div className="main">
      <Header />
      <Content>
        <Context.Provider value={{api_call, weather}}>
          <WeatherSearch/>
          {weather && <WeatherData />}
        </Context.Provider>
      </Content>
    </div>
  );
};

export default Main;
