const WeatherFinder = () => {
    return (
        <div className="w-screen grid grid-cols-2 grid-rows-2 px-4 text-white gap-4">
            <h3>Weather app</h3>
            <i className='bx bxs-toggle-left text-[#53388F] text-3xl justify-self-end'></i>
            <input className="bg-[#52B5E8] shadow-[0px_4px_4px_0px_rgba(255,_255,_255,_0.25)_inset] rounded-lg placeholder-[#D5F3FF] placeholder:bg-[url('/lupa.png')] placeholder:bg-no-repeat outline-none col-span-2 px-2" type="text" placeholder="        Busca una ciudad" />
        </div>
    )
}
export default WeatherFinder