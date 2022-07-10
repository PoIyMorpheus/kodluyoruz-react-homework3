let icons = [
    { name: 'clear sky', time: "day",icon: '01d.png' },
    { name: 'clear sky', time: "night",icon: '01n.png' },

    { name: 'few clouds', time: "day",icon: '02d.png' },
    { name: 'few clouds', time: "night",icon: '02n.png' },

    { name: 'scattered clouds', time: "day",icon: '03d.png' },
    { name: 'scattered clouds', time: "night",icon: '03n.png' },

    { name: 'broken clouds', time: "day",icon: '04d.png' },
    { name: 'broken clouds', time: "night",icon: '04n.png' },

    { name: 'overcast clouds', time: "day",icon: '04d.png' },
    { name: 'overcast clouds', time: "night",icon: '04n.png' },

    { name: 'shower rain', time: "day",icon: '09d.png' },
    { name: 'shower rain', time: "night",icon: '09n.png' },

    { name: 'drizzle', time: "day",icon: '09d.png' },
    { name: 'drizzle', time: "night",icon: '09n.png' },

    { name: 'light intensity drizzle', time: "day",icon: '09d.png' },
    { name: 'light intensity drizzle', time: "night",icon: '09n.png' },

    { name: 'heavy intensity drizzle', time: "day",icon: '09d.png' },
    { name: 'heavy intensity drizzle', time: "night",icon: '09n.png' },

    { name: 'light intensity drizzle rain', time: "day",icon: '09d.png' },
    { name: 'light intensity drizzle rain', time: "night",icon: '09n.png' },

    { name: 'drizzle rain', time: "day",icon: '09d.png' },
    { name: 'drizzle rain', time: "night",icon: '09n.png' },

    { name: 'heavy intensity drizzle rain', time: "day",icon: '09d.png' },
    { name: 'heavy intensity drizzle rain', time: "night",icon: '09n.png' },

    { name: 'shower rain and drizzle', time: "day",icon: '09d.png' },
    { name: 'shower rain and drizzle', time: "night",icon: '09n.png' },

    { name: 'heavy shower rain and drizzle', time: "day",icon: '09d.png' },
    { name: 'heavy shower rain and drizzle', time: "night",icon: '09n.png' },

    { name: 'shower drizzle', time: "day",icon: '09d.png' },
    { name: 'shower drizzle', time: "night",icon: '09n.png' },

    { name: 'heavy intensity shower rain', time: "day",icon: '09d.png' },
    { name: 'heavy intensity shower rain', time: "night",icon: '09n.png' },

    { name: 'ragged shower rain', time: "day",icon: '09d.png' },
    { name: 'ragged shower rain', time: "night",icon: '09n.png' },

    { name: 'light intensity shower rain', time: "day",icon: '09d.png' },
    { name: 'light intensity shower rain', time: "night",icon: '09n.png' },

    { name: 'rain', time: "day",icon: '10d.png' },
    { name: 'rain', time: "night",icon: '10n.png' },

    { name: 'extreme rain', time: "day",icon: '10d.png' },
    { name: 'extreme rain', time: "night",icon: '10n.png' },

    { name: 'very heavy rain', time: "day",icon: '10d.png' },
    { name: 'very heavy rain', time: "night",icon: '10n.png' },

    { name: 'heavy intensity rain', time: "day",icon: '10d.png' },
    { name: 'heavy intensity rain', time: "night",icon: '10n.png' },

    { name: 'moderate rain', time: "day",icon: '10d.png' },
    { name: 'moderate rain', time: "night",icon: '10n.png' },

    { name: 'light rain', time: "day",icon: '10d.png' },
    { name: 'light rain', time: "night",icon: '10n.png' },

    { name: 'thunderstorm', time: "day",icon: '11d.png' },
    { name: 'thunderstorm', time: "night",icon: '11n.png' },

    { name: 'snow', time: "day",icon: '13d.png' },
    { name: 'snow', time: "night",icon: '13n.png' },

    { name: 'freezing rain', time: "day",icon: '13d.png' },
    { name: 'freezing rain', time: "night",icon: '13n.png' },

    { name: 'Heavy shower snow', time: "day",icon: '13d.png' },
    { name: 'Heavy shower snow', time: "night",icon: '13n.png' },

    { name: 'Shower snow', time: "day",icon: '13d.png' },
    { name: 'Shower snow', time: "night",icon: '13n.png' },

    { name: 'Light shower snow', time: "day",icon: '13d.png' },
    { name: 'Light shower snow', time: "night",icon: '13n.png' },

    { name: 'Rain and snow', time: "day",icon: '13d.png' },
    { name: 'Rain and snow', time: "night",icon: '13n.png' },

    { name: 'Light rain and snow', time: "day",icon: '13d.png' },
    { name: 'Light rain and snow', time: "night",icon: '13n.png' },

    { name: 'Shower sleet', time: "day",icon: '13d.png' },
    { name: 'Shower sleet', time: "night",icon: '13n.png' },

    { name: 'Light shower sleet', time: "day",icon: '13d.png' },
    { name: 'Light shower sleet', time: "night",icon: '13n.png' },

    { name: 'Sleet', time: "day",icon: '13d.png' },
    { name: 'Sleet', time: "night",icon: '13n.png' },

    { name: 'Heavy snow', time: "day",icon: '13d.png' },
    { name: 'Heavy snow', time: "night",icon: '13n.png' },

    { name: 'light snow', time: "day",icon: '13d.png' },
    { name: 'light snow', time: "night",icon: '13n.png' },

    { name: 'mist', time: "day",icon: '50d.png' },
    { name: 'mist', time: "night",icon: '50n.png' },

    { name: 'tornado', time: "day",icon: '50d.png' },
    { name: 'tornado', time: "night",icon: '50n.png' },

    { name: 'squalls', time: "day",icon: '50d.png' },
    { name: 'squalls', time: "night",icon: '50n.png' },

    { name: 'dust', time: "day",icon: '50d.png' },
    { name: 'dust', time: "night",icon: '50n.png' },

    { name: 'sand', time: "day",icon: '50d.png' },
    { name: 'sand', time: "night",icon: '50n.png' },

    { name: 'Haze', time: "day",icon: '50d.png' },
    { name: 'Haze', time: "night",icon: '50n.png' },

    { name: 'fog', time: "day",icon: '50d.png' },
    { name: 'fog', time: "night",icon: '50n.png' },

    { name: 'Smoke', time: "day",icon: '50d.png' },
    { name: 'Smoke', time: "night",icon: '50n.png' },

    { name: 'sand/ dust whirls', time: "day",icon: '50d.png' },
    { name: 'sand/ dust whirls', time: "night",icon: '50n.png' },

    { name: 'volcanic ash', time: "day",icon: '50d.png' },
    { name: 'volcanic ash', time: "night",icon: '50n.png' },


]

export function findWeather(name,time){
    let imageName = icons.filter(x=>x.name === name).filter(x=>x.time === time)[0].icon

    return require(`../icon/${imageName}`)
}

export function getWeatherImageTag(name,time,width,height){
    if(name.includes("thunderstorm")){
        return(<img src={findWeather("thunderstorm",time)} width={width} height={height} alt={name} />)
    }
    return(
        <img src={findWeather(name,time)} width={width} height={height} alt={name} />
    )
}


