import { useState } from "react";

const WeatherAppHeader = () => {

    const [isDark, setIsDark] = useState(false)
    
    
    
    const handleDarkMode = () => {
        setIsDark(!isDark);
        
        if(!isDark){
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
        <div className="w-screen grid grid-cols-2 grid-rows-2 p-4 text-xl text-white gap-4 md:flex md:justify-between md:p-4 md:max-w-5xl">
            <h3 className="md:text-2xl">Weather app</h3>
            <div className="justify-self-end">
                <i onClick={handleDarkMode} className='bx bxs-toggle-right hidden text-[#53388F] dark:text-[#52B5E8] cursor-pointer text-4xl md:text-5xl' ></i>
                <i onClick={handleDarkMode} className='bx bxs-toggle-left text-[#53388F] dark:text-[#52B5E8] cursor-pointer text-4xl justify-self-end md:text-5xl'></i>
            </div>
        </div>
    )
}
export default WeatherAppHeader