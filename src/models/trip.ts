export type Trip = {
  id: number;
  destination: Destination;
  departureDate: string;
  returnDate: string;
};

type Destination = {
  city: string;
  image: string;
};
