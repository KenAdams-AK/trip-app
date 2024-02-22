import { getWeekday } from "@/helpers/dateFormater";

import { Trip } from "@/models/trip";

import { useTripForecast } from "@/hooks/useTripForecast";

import { WEATHER_ICONS } from "@/assets/weather-icons";

import "./TripForecast.scss";

type TripForecastProps = {
  tripData: Trip;
};

export function TripForecast({ tripData }: TripForecastProps) {
  const { data: forecast, isLoading, isError } = useTripForecast(tripData);

  if (isLoading) return <section className="trip-forecast">Loading...</section>;

  if (isError || !forecast)
    return (
      <section className="trip-forecast">Failed to fetch forecast.</section>
    );

  return (
    <section className="trip-forecast">
      <ul className="trip-forecast__list">
        {forecast.days.map(({ timestamp, tempMin, tempMax, icon }) => (
          <li key={timestamp} className="trip-forecast__day">
            <div className="trip-forecast__weekday">
              {getWeekday(timestamp)}
            </div>
            <div className="trip-forecast__temp">
              {Math.round(tempMin)}
              <sup>&deg;</sup>/{Math.round(tempMax)}
              <sup>&deg;</sup>
            </div>
            <div className="trip-forecast__icon">
              <img
                src={WEATHER_ICONS[icon as keyof typeof WEATHER_ICONS]}
                alt={icon}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
