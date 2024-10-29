import { FC } from "react";
type WeatherProps = {
  heading: string;
  img: string;
  tepHigh: number;
  tepLow: number;
};

const Weather: FC<WeatherProps> = ({ heading, img, tempHigh, tempLow }) => {
  return (
    <div className="w-30 flex flex-col items-center shadow-sm p-5">
      <h3>{heading}</h3>
      <img className="w-10" src={img} alt="" />
      <p>{tempHigh}</p>
      <p>{tempLow}</p>
    </div>
  );
};

export default Weather;
