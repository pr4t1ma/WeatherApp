import { FC } from "react";
type WeatherProps = {
  heading: string;
  img: string;
  tem: number;
};

const Weather: FC<WeatherProps> = ({ heading, img, tem }) => {
  return (
    <div className="w-30 flex flex-col items-center shadow-sm">
      <h3>{heading}</h3>
      <img className="w-10" src={img} alt="" />
      <p>{tem}</p>
    </div>
  );
};

export default Weather;
