import { useQuery } from "@tanstack/react-query";

import { CityForecastResponse } from "@/models/cityForecast";

const ONE_HOUR = 1000 * 60 * 60;

const fetchCityForecast = (city: string) => {
  const API_KEY = import.meta.env.VITE_FORECAST_API_KEY;
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`;

  return fetch(apiUrl).then(
    (res) => res.json() as Promise<CityForecastResponse>,
  );
};

export function useCityForecast(city: string) {
  return useQuery({
    queryKey: ["cityForecast", city],
    queryFn: () => fetchCityForecast(city),
    select: (data) => data.days[0],
    staleTime: ONE_HOUR,
  });
}
