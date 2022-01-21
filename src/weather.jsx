import './App.css';
import React from "react";

const WeatherContent = ({weatherData}) => (
    <div>
        <h3>{weatherData.name}</h3>
        <p>{weatherData.main.temp} °F</p>
    </div>
    
)

export default WeatherContent;