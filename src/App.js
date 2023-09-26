import { useEffect, useState } from "react";
import "./App.css";
import apiCalling from "./api/weather";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("Faisalabad");
  console.log(data);
  useEffect(() => {
    apiCalling(location)
      .then((resp) => {
        setData(resp);
      })
      .catch((error) => {});
  }, [location]);
  return (
    <div>
      <Weather data={data}  locate={setLocation}/>
    </div>
  );
}

export default App;
