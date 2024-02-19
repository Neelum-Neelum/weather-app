import SearchBox from "./searchBox"
import InfoBox from "./infoBox"
import { useState } from "react";

export default function WeatherApp(){
    const[weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 21.28,
        humidity: 37,
        temp: 22.05,
        tempMax: 22.05,
        tempMin: 20.06,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
       setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h2>Weather App By Hijab</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}