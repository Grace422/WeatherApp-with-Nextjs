import React from 'react';
import { WeatherData, ForecastData } from '../../types/fetchWeather';
import DailyForecast from '../app/DailyForecast';
import Image from 'next/image';


interface WeatherDetailsProps {
    weatherData: WeatherData;
    forecastData: ForecastData[];
    location: string;
    units: unknown
}

const fetchDailyForecast = (forecastData: ForecastData[]) => {
    const daily = forecastData
        .filter((day) => day.dt_txt.includes('12:00:00')) 
        .map((day) => ({
            dt: day.dt,
            dt_txt: day.dt_txt,
            icon: day.weather[0].icon, 
            description: day.weather[0].description, 
            temp_max: day.main.temp_max,
            temp_min: day.main.temp_min,
            temp: day.main.temp
        }));

    return daily;
};



const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weatherData, forecastData, location, units }) => {
    console.log("Daily", fetchDailyForecast(forecastData));

    return (
        <div className="max-w-4xl w-full md:mt-6 bg-gradient-to-b from-sky-700/10 to-sky-600/30 px-6 md:p-6 rounded-lg backdrop-blur-md shadow-xl text-center">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{location}</h2>
            <p className="text-md md:text-lg">
                {new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                })} | {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
            <div className="flex justify-between pt-4 text-sm md:text-md items-center">
              <div className="flex gap-4 items-center justify-center">
                <div className='flex flex-col items-center justify-center font-bold gap-x-8'>
                <Image className='w-20 h-20' src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} width={40} height={40} alt={''} />
                <p className="capitalize text-green-300">{weatherData.weather[0].description}</p>
            </div>
            <div className="text-6xl font-bold">
                {Math.round(weatherData.main.temp)}°
            </div>
              </div>
                <div className='flex flex-col gap-2 items-start'>
                    <p className='flex justify-center items-center gap-0.5 md:gap-1 text-lg' >  Humidity: {weatherData.main.humidity}%</p>
                    <p className='flex justify-center items-center gap-0.5 md:gap-1 text-lg'> Wind: {units === 'imperial' ? weatherData.wind.speed : (weatherData.wind.speed * 3.6).toFixed()} {units === 'imperial' ? 'mph' : 'kph'}</p>
                </div>
            </div>
            {forecastData && <DailyForecast daysToShow={fetchDailyForecast(forecastData)} />}
        </div>
    );
};

export default WeatherDetails;