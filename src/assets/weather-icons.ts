import clearDay from "./weather-icons/clear-day.svg";
import clearNight from "./weather-icons/clear-night.svg";
import cloudy from "./weather-icons/cloudy.svg";
import fog from "./weather-icons/fog.svg";
import hail from "./weather-icons/hail.svg";
import partlyCloudyDay from "./weather-icons/partly-cloudy-day.svg";
import partlyCloudyNight from "./weather-icons/partly-cloudy-night.svg";
import rainSnowShowersDay from "./weather-icons/rain-snow-showers-day.svg";
import rainSnowShowersNight from "./weather-icons/rain-snow-showers-night.svg";
import rainSnow from "./weather-icons/rain-snow.svg";
import rain from "./weather-icons/rain.svg";
import showersDay from "./weather-icons/showers-day.svg";
import showersNight from "./weather-icons/showers-night.svg";
import sleet from "./weather-icons/sleet.svg";
import snowShowersDay from "./weather-icons/snow-showers-day.svg";
import snowShowersNight from "./weather-icons/snow-showers-night.svg";
import snow from "./weather-icons/snow.svg";
import thunderRain from "./weather-icons/thunder-rain.svg";
import thunderShowersDay from "./weather-icons/thunder-showers-day.svg";
import thunderShowersNight from "./weather-icons/thunder-showers-night.svg";
import thunder from "./weather-icons/thunder.svg";
import wind from "./weather-icons/wind.svg";

export const WEATHER_ICONS = {
  "clear-day": clearDay,
  "clear-night": clearNight,
  cloudy,
  fog,
  hail,
  "partly-cloudy-day": partlyCloudyDay,
  "partly-cloudy-night": partlyCloudyNight,
  "rain-snow-showers-day": rainSnowShowersDay,
  "rain-snow-showers-night": rainSnowShowersNight,
  "rain-snow": rainSnow,
  rain,
  "showers-day": showersDay,
  "showers-night": showersNight,
  sleet,
  "snow-showers-day": snowShowersDay,
  "snow-showers-night": snowShowersNight,
  snow,
  "thunder-rain": thunderRain,
  "thunder-showers-day": thunderShowersDay,
  "thunder-showers-night": thunderShowersNight,
  thunder,
  wind,
} as const;

export type WeatherIcon = keyof typeof WEATHER_ICONS;
