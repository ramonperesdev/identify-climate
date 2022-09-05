import { useCallback, useEffect, useState } from "react";
import axios from "axios";

interface IStateCoords {
  latitude: number | undefined;
  longitude: number | undefined;
}

function getLocationWeather() {
  function apiCall({ latitude, longitude }: IStateCoords) {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1251c9461659318c33e6828a82bdca9c&units=metric`
      )
      .then((response) => {
        console.log("response", response);
      });
  }

  return { apiCall };
}

function App() {
  const [coords, setCoords] = useState<IStateCoords | undefined>(undefined);
  const [error, setError] = useState(false);

  const handleSetLocation = useCallback(
    (latitude: number, longitude: number) => {
      if (!latitude || !longitude) {
        return;
      }

      setCoords({ latitude: latitude, longitude: longitude });
      console.log("passou");
    },
    []
  );

  const handleSetWeather = useCallback(async () => {
    const { apiCall } = getLocationWeather();

    try {
      const response = await apiCall({
        latitude: coords?.latitude,
        longitude: coords?.longitude,
      });

      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  }, [coords]);

  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setCoords({ latitude: latitude, longitude: longitude });
        },
        () => setError(true)
      );
    }
  }, []);

  useEffect(() => {
    console.log("error", error);
  }, [error]);
  useEffect(() => {
    console.log("coords", coords);
  }, [coords]);

  return (
    <div className="App">
      <button type="button" onClick={handleSetWeather}>
        test
      </button>
    </div>
  );
}

export default App;
