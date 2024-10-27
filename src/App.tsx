import "./App.css";
import EnvDashboard from "./EnvDashboard";
import Menu from "./Menu";
import Weekweather from "./Weekweather";

function App() {
  return (
    <div className="container mx-auto w-1/3 border  h-auto p-10 shadow-xl">
      <h1 className="text-blue-700 text-bold text-3xl my-5">
        Weather in Berlin
      </h1>
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
      <img
        src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
        alt=""
      />
      <Weekweather />
      <EnvDashboard />
    </div>
  );
}

export default App;
