import React from "react";
import {useCity} from "../context/CityContext"
import {useState,useEffect} from "react";
import axios from 'axios'
import {getWeatherImageTag} from "../iconManager/iconManager"

function Weekly() {
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

    let middleOfDaysList = []

  return (
    <div className="card" style={{ borderRadius: "25px" }}>
      <div className="card-body p-4">
        <div id="demo3" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators mb-0">
            <li data-target="#demo3" data-slide-to="0"></li>
            <li data-target="#demo3" data-slide-to="1"></li>
            <li data-target="#demo3" data-slide-to="2" className="active"></li>
          </ul>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                {!isLoading && 
                    weather.list.filter((x)=>new Date(x.dt_txt).getHours()===12).forEach(element => {
                        middleOfDaysList.push(element)
                    })
                }
                {!isLoading && [...Array(5)].map((x,i)=>{
                    
                    let initial = middleOfDaysList[i]
                    let dayTime = initial.sys.pod==="n" ? "night" : "day"
                    let initialWeather = initial.weather[0].description
                    return (
                        <div key={i} className="flex-column">
                            <p className="small">
                                <strong>{(initial.main.temp -272.15).toFixed(0)}°C</strong>
                            </p>
                            {getWeatherImageTag(initialWeather, dayTime, "64", "64")}
                            <p className="mb-0">
                                <strong>{new Date(initial.dt_txt).toLocaleString('en-us', {  weekday: 'long' }).substring(0, 3)}</strong>
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

export default Weekly;
<div className="flex-column">
                  <p className="small">
                    <strong>18°C</strong>
                  </p>
                  <i
                    className="bi bi-cloud-drizzle"
                    style={{ color: "#ddd" }}
                  ></i>
                  {getWeatherImageTag("rain", "day", "64", "64")}
                  <p className="mb-0">
                    <strong>Fri</strong>
                  </p>
                </div>
