import { Cities } from "@/mocks/citiesData";

export type Trip = {
  id: number;
  destination: Destination;
  departureDate: string;
  returnDate: string;
};

type Destination = {
  city: Cities;
  image: string;
};
