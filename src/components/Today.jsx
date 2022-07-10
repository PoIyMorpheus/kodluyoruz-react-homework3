import React from "react";
import {useCity} from "../context/CityContext"
import {useState,useEffect} from "react";
import axios from 'axios'
import {getWeatherImageTag} from "../iconManager/iconManager"
function Today() {
    const {city} = useCity()
    
    const api = "6e39c919e634c119b6e0d4e4857a6365"
    
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}`
    
    const [weather,setWeather] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    
    useEffect(()=>{
      axios(url)
      .then((res)=>setWeather(res.data))
      .catch((e)=>console.log(e))
      .finally(()=>setIsLoading(false))
    },[url])

    
  return (
    <div className="card mb-4" style={{ borderRadius: "25px" }}>
      <div className="card-body p-4">
        <div id="demo2" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators mb-0">
            <li data-target="#demo2" data-slide-to="0"></li>
            <li data-target="#demo2" data-slide-to="1" className="active"></li>
            <li data-target="#demo2" data-slide-to="2"></li>
          </ul>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                {!isLoading && [...Array(5)].map((x,i)=>{
                  let initial = weather.list[i]
                  let time = new Date(initial.dt_txt);
                  let dayTime = initial.sys.pod==="n" ? "night" : "day"
                  let initialWeather = initial.weather[0].description
                  
                  return(
                    <div key={i} className="flex-column">
                      <p className="small">
                        <strong>{(initial.main.temp -272.15).toFixed(0)}°C</strong>
                      </p>
                      {getWeatherImageTag(initialWeather,dayTime,"64", "64")}
                      <p className="mb-0">
                        <strong>{time.getUTCHours()}:00</strong>
                      </p>
                      <p className="mb-0 text-muted" style={{ fontSize: ".65rem" }}>
                        PM
                      </p>
                    </div>
                  )
                  })
                }
                {isLoading && "Loading..."}
                      
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Today;

