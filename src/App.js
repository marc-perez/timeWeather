import './App.css';
import React, { useEffect, useState} from "react";
import WeatherContent from './weather';
import Time from './time';



function App() {
  const lat = 40.8682;
  const long = -73.8787;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      
      await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        // console.log(result);
      });
    }
    fetchData();
  }, [lat,long])


  return (
    <div className="App">
      <header className="App-header">

        <div className="flexing">
            <Time />
          {(typeof data.main != 'undefined') ? (
           <WeatherContent weatherData={data}/>
           ): (
              <div></div>
           )}
        </div> 
        
        
        

      </header>
      
    </div>
  );
}

export default App;
