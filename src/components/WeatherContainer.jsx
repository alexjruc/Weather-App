import { useState } from "react";
import WeatherStats from "./WeatherStats";
import WeatherFinder from "./WeatherFinder";

const WeatherContainer = ({ weather }) => {
    console.log(weather);

    const [iscelsius, setIscelsius] = useState(true);

    const changeUnitTemp = (temp) => {
        if(iscelsius) {
            const celsiusTemp = (temp - 273.15).toFixed(0);
            return `${celsiusTemp}°C`;
        }else {
            const fahrenheitTemp = (((temp - 273.15) * 9/5) + 32).toFixed(0);
            return `${fahrenheitTemp}°F`;
        }
    }
    
    const handleClickTemp = () => {
        setIscelsius(!iscelsius)
    }

    const weatherIcons = {
        "clear sky" : "/clear_sky.svg",
        "few clouds" : "/few_clouds.svg",
        "scattered clouds" : "/scattered_clouds.svg",
        "broken clouds" : "/broken_clouds.svg",
        "shower rain" : "/shower_rain.svg",
        "rain" : "/rain.svg",
        "thunderstorm" : "/thunderstorm.svg",
        "snow" : "/snow.svg",
        "mist" : "/mist.svg",
    }

    return (
        <section className="w-full h-full grid grid-rows-[auto_1fr] justify-center items-center">
            <WeatherFinder />
            <div className="flex flex-col gap-8 text-center justify-center items-center">
                <div className='w-[300px] h-[200px] flex flex-col justify-center items-center gap-4 text-center text-[#026EED] rounded-3xl '>
                    <img className="absolute w-max" src="/bg-card.png" alt="" />
                    <div className="w-full grid grid-cols-2 items-start relative">
                        <div>
                            <h1 className="text-[3rem]">{changeUnitTemp(weather.main.temp)}</h1>
                            <WeatherStats icon="/wind.svg" value={weather.wind.speed} unit="m/s" />
                            <WeatherStats icon="/humidity.svg" value={weather.main.humidity} unit="%" />
                            <WeatherStats icon="/pressure.svg" value={weather.main.pressure} unit="hPA" />
                        </div>
                        <picture className="absolute -top-8 -right-2">
                            <img className="w-[140px]" src={weatherIcons[weather.weather[0].description]} alt="Weather Icon" />
                        </picture>
                    </div>
                    <div className="w-full flex justify-between px-4 font-semibold z-10">
                        <h3>
                            {weather.name}, {weather.sys.country}
                        </h3>
                        <h4 className="capitalize">{weather.weather[0].description}</h4>
                    </div>
                </div>
                <button onClick={handleClickTemp} className="bg-[#38A1D8] w-[150px] px-4 py-1 rounded-lg text-white">Cambiar a F°</button>
            </div>
        </section>
    );
};
export default WeatherContainer;
