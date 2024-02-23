import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { defaultTrip } from "@/mocks/defaultTrip";

import { Trip } from "@/models/trip";

import { localStorageKeys } from "@/constants/storageKeys";

import { useLocalStorage } from "./useLocalStorage";

export function useTrips() {
  const [trips, setTrips] = useLocalStorage<Trip[]>(localStorageKeys.trips, [
    defaultTrip,
  ]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const filteredTrips = useMemo(() => {
    const sortedTrips = trips.sort((a, b) => {
      return (
        new Date(a.departureDate).getTime() -
        new Date(b.departureDate).getTime()
      );
    });

    if (!query) {
      return sortedTrips;
    }

    return sortedTrips.filter((trip) =>
      trip.destination.city.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, trips]);

  return {
    filteredTrips,
    setTrips,
  } as const;
}
