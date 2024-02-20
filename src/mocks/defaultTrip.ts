import { Trip } from "@/models/trip";

import { citiesData } from "./citiesData";

// "yyyy-mm-dd" format
const departureDate = new Date().toISOString().substring(0, 10);
const returnDate = new Date(
  new Date(departureDate).getTime() + 15 * 24 * 60 * 60 * 1000,
)
  .toISOString()
  .substring(0, 10);

export const defaultTrip: Trip = {
  id: 1,
  destination: {
    city: "Kyiv",
    image: citiesData.Kyiv,
  },
  departureDate,
  returnDate,
};
