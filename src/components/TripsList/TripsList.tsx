import { defaultTrip } from "@/mocks/defaultTrip";
import { Trip } from "@/models/trip";

import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

import { AddButton } from "@/components/AddButton/AddButton";
import { TripCard } from "@/components/TripCard/TripCard";

import "./TripsList.scss";

type TripsListProps = {
  trips: Trip[];
  handleAddTrip: () => void;
};

export function TripsList({ trips, handleAddTrip }: TripsListProps) {
  const scrollRef = useHorizontalScroll<HTMLDivElement>();

  return (
    <div className="trips-list">
      <div className="trips-list__list" ref={scrollRef}>
        <TripCard trip={defaultTrip} />
        <TripCard trip={defaultTrip} />
        <TripCard trip={defaultTrip} />
        <TripCard trip={defaultTrip} />
        <TripCard trip={defaultTrip} />
        <TripCard trip={defaultTrip} />
        <TripCard trip={defaultTrip} />
        <TripCard trip={defaultTrip} />
        <TripCard trip={defaultTrip} />
        <TripCard trip={defaultTrip} />
        <TripCard trip={defaultTrip} />
        <TripCard trip={defaultTrip} />
        <TripCard trip={defaultTrip} />
        <TripCard trip={defaultTrip} />
        <TripCard trip={defaultTrip} />
        <TripCard trip={defaultTrip} />
        <TripCard trip={defaultTrip} />
        <TripCard trip={defaultTrip} />
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
      <AddButton onClick={handleAddTrip} />
    </div>
  );
}
