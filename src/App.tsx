import { useCallback, useEffect, useState } from "react";

// TYPES
import { ICoords } from "./interfaces/weather";
import { Home } from "./pages/Home";
import "./global.css";

//SERVICES
import { getLocationWeather } from "./services/endpoints/weather";

function App() {
  // const [coords, setCoords] = useState<ICoords | undefined>(undefined);
  // const [error, setError] = useState(false);

  // const handleSetLocation = useCallback(
  //   (latitude: number, longitude: number) => {
  //     if (!latitude || !longitude) {
  //       return;
  //     }

  //     setCoords({ latitude: latitude, longitude: longitude });
  //     console.log("passou");
  //   },
  //   []
  // );

  // const handleSetWeather = useCallback(async () => {
  //   const { apiCall } = getLocationWeather();

  //   try {
  //     const response = await apiCall({
  //       latitude: coords?.latitude,
  //       longitude: coords?.longitude,
  //     });

  //     console.log("response", response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [coords]);

  // useEffect(() => {
  //   if (window.navigator.geolocation) {
  //     window.navigator.geolocation.getCurrentPosition(
  //       ({ coords: { latitude, longitude } }) => {
  //         setCoords({ latitude: latitude, longitude: longitude });
  //       },
  //       () => setError(true)
  //     );
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log("error", error);
  // }, [error]);
  // useEffect(() => {
  //   console.log("coords", coords);
  // }, [coords]);

  return <Home />;
}

export default App;
