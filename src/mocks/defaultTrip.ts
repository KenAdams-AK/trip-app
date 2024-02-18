import { Trip } from "@/models/trip";

import { citiesData } from "./citiesData";

export const defaultTrip: Trip = {
  id: 1,
  destination: citiesData[0],
  departureDate: "2024-02-20",
  returnDate: "2024-03-01",
};
