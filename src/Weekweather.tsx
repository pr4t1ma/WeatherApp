import { useEffect, useState } from "react";
import Weather from "./Weather";
const getDayName = (dateString) => {
  const options = { weekday: "long" }; // 'long' gives full name like 'Monday'
  return new Date(dateString).toLocaleDateString("en-US", options);
};

const Weekweather = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://api.weatherbit.io/v2.0/forecast/daily?city=Berlin&key=2a9f605394cb4e62a59859564be9660f"
    ).then((res) => res.json());
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-row gap-5 flex-wrap shadow-md p-5">
      {data.map((weather) => {
        return (
          <Weather
            img="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-2.png"
            heading={getDayName(weather.datetime)}
            tempHigh={weather.high_temp}
            tempLow={weather.low_temp}
          />
        );
      })}
    </div>
  );
};

export default Weekweather;
