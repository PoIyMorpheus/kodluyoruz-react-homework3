import React from "react";
import { useState, useEffect } from "react";
import { useCity } from "../context/CityContext";
import axios from "axios";
import { getWeatherImageTag } from "../iconManager/iconManager";

function Instant() {
  const { city } = useCity();

  const api = "6e39c919e634c119b6e0d4e4857a6365";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

  let timeURL ="https://worldtimeapi.org/api/timezone/Europe/Istanbul"

  const [weather, setWeather] = useState({});
  const [time, setTime] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isTimeLoading, setIsTimeLoading] = useState(true);


  useEffect(() => {
    axios(url)
      .then((res) => setWeather(res.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, [url]);

  useEffect(() => {
    axios(timeURL)
      .then((res) => setTime(res.data))
      .catch((e) => console.log(e))
      .finally(() => setIsTimeLoading(false));
  }, []);

  let dayTime = "day";
 
  if(!isTimeLoading && !isLoading) {
    let initialHour = new Date(time.datetime).getHours()
    dayTime= (initialHour >= 18 || initialHour <= 4) ? "night" : "day";
  }

  return (
    <div className="card mb-4 gradient-custom" style={{ borderRadius: "25px" }}>
      <div className="card-body p-4">
        <div id="demo1" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators mb-0">
            <li data-target="#demo1" data-slide-to="0" className="active"></li>
            <li data-target="#demo1" data-slide-to="1"></li>
            <li data-target="#demo1" data-slide-to="2"></li>
          </ul>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-between mb-4 pb-2">
                <div>
                  <h2 className="display-2">
                    <strong>
                      {(!isLoading && !isTimeLoading) &&
                        (weather.main.temp - 272.15).toFixed(0) + "°C"}
                      {isLoading && "Loading..."}
                    </strong>
                  </h2>
                  <p className="text-muted mb-0">{city}, Turkey</p>
                </div>
                <div>
                  {!isLoading && getWeatherImageTag(weather.weather[0].description, dayTime,"150","150")}
                  {isLoading && "Loading..."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instant;
