import { useState } from "react";
import WeatherStats from "./WeatherStats";

const WeatherContainer = ({ weather }) => {
    
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
        "01d" : "/clear_sky.svg",
        "01n" : "/clear_sky.svg",
        "02d" : "/few_clouds.svg",
        "02n" : "/few_clouds.svg",
        "03d" : "/scattered_clouds.svg",
        "03n" : "/scattered_clouds.svg",
        "04d" : "/broken_clouds.svg",
        "04n" : "/broken_clouds.svg",
        "09d" : "/shower_rain.svg",
        "09n" : "/shower_rain.svg",
        "10d" : "/rain.svg",
        "10n" : "/rain.svg",
        "11d" : "/thunderstorm.svg",
        "11n" : "/thunderstorm.svg",
        "13d" : "/snow.svg",
        "13n" : "/snow.svg",
        "50d" : "/mist.svg",
        "50n" : "/mist.svg",
    }

    return (
        <section className="w-full h-full grid  justify-center items-center">
            <div className="flex flex-col gap-8 text-center justify-center items-center p-2">
                <div className='w-[300px] h-[200px] flex flex-col justify-center items-center gap-2 text-center text-[#026EED] rounded-3xl md:w-[400px] md:h-[280px] dark:text-[#5836B3]'>
                    <img className="absolute w-max md:w-[400px] md:h-[280px]" src="/bg-card.png" alt="" />
                    <div className="w-full grid grid-cols-2 relative p-4">
                        <div className="grid justify-center items-center">
                            <h1 className="text-[3rem] md:text-[5rem]">{changeUnitTemp(weather.main.temp)}</h1>
                            <WeatherStats icon="/wind.svg" value={weather.wind.speed} unit="m/s" />
                            <WeatherStats icon="/humidity.svg" value={weather.main.humidity} unit="%" />
                            <WeatherStats icon="/pressure.svg" value={weather.main.pressure} unit="hPA" />
                        </div>
                        <picture className="absolute -top-4 right-0  md:right-4">
                            <img className="w-[140px] md:w-[160px]" src={weatherIcons[weather.weather[0].icon]} alt="Weather Icon" />
                        </picture>
                    </div>
                    <div className="w-full flex justify-between px-6 pb-5 font-semibold z-10 md:pb-8">
                        <h3>
                            {weather.name}, {weather.sys.country}
                        </h3>
                        <h4 className="capitalize">{weather.weather[0].description}</h4>
                    </div>
                </div>
                <button onClick={handleClickTemp} className="bg-[#38A1D8] w-[150px] px-4 py-1 rounded-lg text-white dark:bg-[#7D69F1]">Cambiar a F°</button>
            </div>
        </section>
    );
};
export default WeatherContainer;
