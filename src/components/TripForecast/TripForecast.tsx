import { getWeekday } from "@/helpers/dateFormater";

import { Trip } from "@/models/trip";

import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import { useTripForecast } from "@/hooks/useTripForecast";

import { WEATHER_ICONS } from "@/assets/weather-icons";

import "./TripForecast.scss";

type TripForecastProps = {
  tripData: Trip;
};

export function TripForecast({ tripData }: TripForecastProps) {
  const { data: forecast, isLoading, isError } = useTripForecast(tripData);
  const listRef = useHorizontalScroll<HTMLUListElement>(!forecast?.days.length); // scroll on mouse wheel

  if (isLoading) return <div className="trip-forecast">Loading...</div>;

  if (isError || !forecast)
    return <div className="trip-forecast">Failed to fetch forecast.</div>;

  return (
    <div className="trip-forecast">
      <ul className="trip-forecast__list" ref={listRef}>
        {forecast.days.map(({ datetime, tempMin, tempMax, icon }) => {
          return (
            <li key={datetime} className="trip-forecast__day">
              <div className="trip-forecast__weekday">
                {getWeekday(datetime)}
              </div>
              <div className="trip-forecast__icon">
                <img
                  src={WEATHER_ICONS[icon as keyof typeof WEATHER_ICONS]}
                  alt={icon}
                />
              </div>
              <div className="trip-forecast__temp">
                {Math.round(tempMin)}
                <sup>&deg;</sup>/{Math.round(tempMax)}
                <sup>&deg;</sup>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
