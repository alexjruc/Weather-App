const WeatherStats = ({icon, value, unit}) => {
    return (
        <div className="flex text-xs text-center gap-2 p-1">
            <img className="w-4 text-[#026EED]" src={icon} alt="icon" />
            <span>{value} {unit}</span>
        </div>
    )
}
export default WeatherStats