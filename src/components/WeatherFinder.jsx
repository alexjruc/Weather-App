import axios from "axios";
import { useState } from "react";

const WeatherFinder = () => {

    const [weatherCityFound, setWeatherCityFound] = useState("")
    const [isDark, setIsDark] = useState(false)
    
    const findCity = (e) => {
        const API_KEY = "ac2edf6ac368a4221f19d4386732de5c";
        if(e.keyCode === 13) {
            let city = document.querySelector("input").value
            
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
                    .then(({ data }) => setWeatherCityFound((data)))
                    .catch((err) => console.log(err));
                console.log(weatherCityFound);
        }
        
        
    }
    
    const handleDarkMode = () => {
        setIsDark(!isDark);
        
        if(isDark){
            document.querySelector(".bxs-toggle-left").style.display = "none";
            document.querySelector(".bxs-toggle-right").style.display = "block";
            document.body.classList.add("dark")
            localStorage.setItem("Theme", JSON.stringify("dark"))
        }else {
            document.querySelector(".bxs-toggle-left").style.display = "block";
            document.querySelector(".bxs-toggle-right").style.display = "none";
            document.body.classList.remove("dark");
            localStorage.setItem("Theme", JSON.stringify("light"))
        }
    }

    return (
        <div className="w-screen grid grid-cols-2 grid-rows-2 px-4 text-white gap-4 md:flex md:justify-between md:p-4 md:max-w-5xl">
            <h3 className="md:text-2xl">Weather app</h3>
            <div className="justify-self-end">
                <i onClick={handleDarkMode} className='bx bxs-toggle-right hidden text-[#53388F] dark:text-[#52B5E8] cursor-pointer text-4xl md:text-5xl' ></i>
                <i onClick={handleDarkMode} className='bx bxs-toggle-left text-[#53388F] dark:text-[#52B5E8] cursor-pointer text-4xl justify-self-end md:text-5xl'></i>
            </div>
            <input onKeyUp={findCity} className="bg-[#52B5E8] shadow-[0px_4px_4px_0px_rgba(255,_255,_255,_0.25)_inset] col-span-2 rounded-lg placeholder-[#D5F3FF] placeholder:bg-[url('/lupa.png')] placeholder:bg-no-repeat outline-none  px-2 dark:bg-[#201F3C] dark:shadow-[0px_4.8546px_4.8546px_0px_rgba(0,_0,_0,_0.25)_inset] dark:placeholder-[#76749E] " type="text" placeholder="        Busca una ciudad" />
        </div>
    )
}
export default WeatherFinder