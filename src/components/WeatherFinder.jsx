import axios from "axios";
import { useState } from "react";

const WeatherFinder = () => {

    const [weatherCityFound, setWeatherCityFound] = useState("")
    
    const findCity = () => {
        let city = document.querySelector("input").value
        
        const API_KEY = "ac2edf6ac368a4221f19d4386732de5c";
    axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(({ data }) => setWeatherCityFound((data)))
            .catch((err) => console.log(err));
        console.log(weatherCityFound);
    }
    

    return (
        <div className="w-screen grid grid-cols-2 grid-rows-2 px-4 text-white gap-4 md:flex md:justify-between md:p-4 md:max-w-5xl">
            <h3 className="md:text-2xl">Weather app</h3>
            <i className='bx bxs-toggle-left text-[#53388F] cursor-pointer text-4xl justify-self-end md:text-5xl'></i>
            <input onKeyUp={findCity} className="bg-[#52B5E8] shadow-[0px_4px_4px_0px_rgba(255,_255,_255,_0.25)_inset] rounded-lg placeholder-[#D5F3FF] placeholder:bg-[url('/lupa.png')] placeholder:bg-no-repeat outline-none col-span-2 px-2" type="text" placeholder="        Busca una ciudad" />
        </div>
    )
}
export default WeatherFinder