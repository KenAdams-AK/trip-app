import "./CityForecast.scss";

type CityForecastProps = {
  data: string; // replace 'string' with the correct type
};

export function CityForecast({ data }: CityForecastProps) {
  return <section className="city-forecast">CityForecast {data}</section>;
}
