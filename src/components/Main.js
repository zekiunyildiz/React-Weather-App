import React, { useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";



const Main = () => {
  const api_call = async e => {
    e.preventDefault();
    const API_KEY = "43c7ee22c8621489263185308bf448d3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Istanbul&appid=${API_KEY}`;
    const request = axios.get(url);
    const response = await request;
    console.log(response);
  };

  

  return (
    <div className="main">
      <Header />
      <Content>
        <WeatherSearch api_call={api_call} />
      </Content>
    </div>
  );
};

export default Main;
