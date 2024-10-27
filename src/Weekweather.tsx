import Weather from "./Weather";

const Weekweather = () => {
  return (
    <div className="flex flex-row gap-5 flex-wrap">
      <Weather
        img="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-2.png"
        heading="sunday"
        tem={22}
      />
      <Weather
        img="https://www.freeiconspng.com/uploads/weather-icon-png-25.png"
        heading="Monday"
        tem={27}
      />
      <Weather
        img="https://static.vecteezy.com/system/resources/thumbnails/010/989/531/small_2x/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png"
        heading="Tuesday"
        tem={32}
      />
      <Weather
        img="https://static.vecteezy.com/system/resources/thumbnails/011/992/945/small/thunderstorm-rain-icon-weather-forecast-meteorological-sign-3d-render-png.png"
        heading="Wednesday"
        tem={20}
      />
    </div>
  );
};

export default Weekweather;
