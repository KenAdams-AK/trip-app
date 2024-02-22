import { Trip } from "@/models/trip";

import { useTripForecast } from "@/hooks/useTripForecast";

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

  return <div>TripForecast</div>;
}
