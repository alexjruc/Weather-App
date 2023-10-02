import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import WeatherContainer from "./components/WeatherContainer";
import WeatherAppHeader from "./components/WeatherAppHeader";

function App() {
    const [weather, setWeather] = useState(null);

    const success = (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const API_KEY = "ac2edf6ac368a4221f19d4386732de5c";

        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
            )
            .then(({ data }) => setWeather(data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    }, []);

    return (
        <main className='bg-[radial-gradient(50%_50%_at_50%_50%,_#D5F3FF_0%,_#51B4E8_99.99%)] dark:bg-[radial-gradient(50%_50%_at_50%_50%,_#53388F_0%,_#2F2958_100%)] font-["Lato"] h-screen flex flex-col justify-center items-center p-2'>
            <WeatherAppHeader />
            {weather === null ? (
                <section className="bg-[#54B6E9] h-screen w-screen flex flex-col justify-center items-center gap-2">
                    <picture>
                        <img src="/loading-cloud.svg" alt="" />
                    </picture>
                    <h2 className="text-white">Weather App</h2>
                    <ul className="bg-white flex gap-4 rounded-xl px-2">
                        <li>
                            <img
                                src="/fluent_weather-blowing-snow.svg"
                                alt=""
                            />
                        </li>
                        <li>
                            <img src="/weather-sunny.svg" alt="" />
                        </li>
                        <li>
                            <img src="/weather-windy-cloudy.svg" alt="" />
                        </li>
                        <li>
                            <img src="/weather-shower.svg" alt="" />
                        </li>
                        <li>
                            <img src="/weather-stormy.svg" alt="" />
                        </li>
                        <li>
                            <img src="/weather-downpour.svg" alt="" />
                        </li>
                        <li>
                            <img src="/weather-partly-sunny.svg" alt="" />
                        </li>
                        <li>
                            <img src="/weather-snow.svg" alt="" />
                        </li>
                    </ul>
                </section>
            ) : (
                <WeatherContainer weather={weather} />
            )}
            
        </main>
    );
}

export default App;
