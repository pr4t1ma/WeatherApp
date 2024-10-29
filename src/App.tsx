import { useEffect, useState } from "react";
import "./App.css";

import Menu from "./Menu";
import Weekweather from "./Weekweather";

function App() {
  const [weather, setWeather] = useState();
  const getWeatherData = async () => {
    const response = await fetch(
      "https://api.weatherbit.io/v2.0/current?city=Berlin&key=2a9f605394cb4e62a59859564be9660f"
    ).then((res) => res.json());
    const data = response;
    setWeather(data.data[0]);
  };

  useEffect(() => {
    getWeatherData();
  }, []);
  return (
    <div className="container mx-auto w-1/3 border  h-auto p-10 shadow-xl">
      <Menu
        items={[
          { label: "Home", href: "./" },
          { label: "About", href: "./about" },
          { label: "Services", href: "./services" },
          { label: "Products", href: "./products" },
          { label: "Blog", href: "./blog" },
          { label: "Careers", href: "./careers" },
          { label: "Contact", href: "./contact" },
        ]}
      />
      {weather && (
        <div className="">
          <h1 className="text-blue-700 text-bold text-3xl my-5">
            Weather in Berlin
          </h1>
          <h2 className=" text-2xl">{weather.weather.description}</h2>

          <div>
            <img
              src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
              alt=""
            />
            <div className="flex justify-between items-center">
              <div>
                <p>Humidity</p> <p>{weather.rh}%</p>
              </div>
              <div className="text-4xl font-bold">{weather.temp}&deg;</div>
              <div>
                <p>Wind</p> <p>{weather.wind_spd}km/h</p>
              </div>
            </div>
          </div>
          <div className="flex  my-10 justify-between">
            <div className="uvray flex flex-col justify-center gap-2">
              <button className="shadow-sm bg-blue-500 rounded-full px-6 py-2 text-white">
                {weather.uv}
              </button>
              <p>UV</p>
            </div>
            <div className="Pollution flex flex-col justify-center gap-2">
              <button className="shadow-sm bg-blue-500 rounded-full px-6 py-2 text-white">
                high
              </button>
              <p>pollution</p>
            </div>
            <div className="pollen flex flex-col justify-center gap-2">
              <button className="shadow-sm bg-blue-500 rounded-full px-6 py-2 text-white">
                {weather.vis}km
              </button>
              <p>Visibility</p>
            </div>
          </div>

          <Weekweather />
        </div>
      )}
    </div>
  );
}

export default App;
