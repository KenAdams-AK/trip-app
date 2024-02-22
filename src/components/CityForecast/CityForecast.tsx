import { useCityForecast } from "@/hooks/useCityForecast";

import { WEATHER_ICONS } from "@/assets/weather-icons";

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
      <div className="city-forecast__info">
        <div className="city-forecast__icon">
          <img
            src={WEATHER_ICONS[forecast.icon as keyof typeof WEATHER_ICONS]}
            alt={forecast.icon}
          />
        </div>
        <div className="forecastData__temp">{forecast.temp}</div>
      </div>
      <h3 className="city-forecast__city">{city}</h3>
    </section>
  );
}
