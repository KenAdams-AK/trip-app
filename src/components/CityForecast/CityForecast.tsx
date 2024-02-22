import { getWeekday } from "@/helpers/dateFormater";

import { useCityForecast } from "@/hooks/useCityForecast";

import { WEATHER_ICONS } from "@/assets/weather-icons";

import { CountdownTimer } from "../CountdownTimer/CountdownTimer";

import "./CityForecast.scss";

type CityForecastProps = {
  city: string;
  departureDate: string;
};

export function CityForecast({ city, departureDate }: CityForecastProps) {
  const { data: forecast, isLoading, isError } = useCityForecast(city);

  if (isLoading) return <section className="city-forecast">Loading...</section>;

  if (isError || !forecast)
    return (
      <section className="city-forecast">Failed to fetch forecast.</section>
    );

  return (
    <section className="city-forecast">
      <div className="city-forecast__info info">
        <div className="info__weekday">{getWeekday(forecast.datetime)}</div>
        <div className="info__weather">
          <div className="info__icon">
            <img
              src={WEATHER_ICONS[forecast.icon as keyof typeof WEATHER_ICONS]}
              alt={forecast.icon}
            />
          </div>
          <div className="info__temp">
            {Math.round(forecast.temp)}
            <sup>°C</sup>
          </div>
        </div>
      </div>
      <div className="city-forecast__city">{city}</div>

      <CountdownTimer targetDate={departureDate} />
    </section>
  );
}
