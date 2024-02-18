import { Trip } from "@/models/trip";

import "./TripCard.scss";

type TripCardProps = {
  trip: Trip;
};

export function TripCard({ trip }: TripCardProps) {
  return (
    <div className="trip-card active">
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
