import "./CityForecast.scss";

type CityForecastProps = {
  data: unknown; // replace 'any' with the correct type
};

export function CityForecast({ data }: CityForecastProps) {
  return <section className="city-forecast">CityForecast {}</section>;
}
