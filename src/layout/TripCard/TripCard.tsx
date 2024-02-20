import { Dispatch, SetStateAction } from "react";

import { Trip } from "@/models/trip";

import "./TripCard.scss";

type TripCardProps = {
  trip: Trip;
  isSelected: boolean;
  setSelectedTrip: Dispatch<SetStateAction<Trip>>;
};

export function TripCard({ trip, isSelected, setSelectedTrip }: TripCardProps) {
  return (
    <div
      className={`trip-card ${isSelected ? "active" : ""}`}
      role="button"
      onClick={() => setSelectedTrip(trip)}
      onKeyDown={() => {}}
      tabIndex={0}
    >
      <div className="trip-card__image">
        <img src={trip.destination.image} alt={trip.destination.city} />
      </div>
      <div className="trip-card__info">
        <h2>{trip.destination.city}</h2>
        <p>
          {trip.departureDate} &minus; {trip.returnDate}
        </p>
      </div>
    </div>
  );
}

// function areEqual(prevProps: TripCardProps, nextProps: TripCardProps): boolean {
//   return prevProps.trip === nextProps.trip;
// }

// export default memo(TripCard, areEqual);
