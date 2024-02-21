import "./TripForecast.scss";

type TripForecastProps = {
  data: string; // replace 'string' with the correct type
};

export function TripForecast({ data }: TripForecastProps) {
  return <div>TripForecast {data}</div>;
}
