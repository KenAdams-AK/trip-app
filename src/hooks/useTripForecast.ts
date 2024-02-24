import { useQuery } from "@tanstack/react-query";

import { Trip } from "@/models/trip";
import { TripForecastResponse } from "@/models/tripForecast";

const ONE_HOUR = 1000 * 60 * 60;

const fetchTripForecast = ({
  destination,
  departureDate,
  returnDate,
}: Trip) => {
  const API_KEY = import.meta.env.VITE_FORECAST_API_KEY;
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${destination.city}/${departureDate}/${returnDate}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`;

  return fetch(apiUrl).then(
    (res) => res.json() as Promise<TripForecastResponse>,
  );
};

export function useTripForecast(tripData: Trip) {
  return useQuery({
    queryKey: ["tripForecast", tripData.destination.city, tripData.id],
    queryFn: () => fetchTripForecast(tripData),
    select: ({ address, days }) => {
      return {
        address,
        days: days.map((day) => ({
          datetime: day.datetime,
          tempMin: day.tempmin,
          tempMax: day.tempmax,
          icon: day.icon,
        })),
      };
    },
    staleTime: ONE_HOUR,
  });
}
