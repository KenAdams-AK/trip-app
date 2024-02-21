import { Dispatch, SetStateAction } from "react";

import { Trip } from "@/models/trip";

import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import { useModalContext } from "@/hooks/useModalContext";

import { MemoizedTripCard } from "@/layout/TripCard/TripCard";

import "./TripsList.scss";

type TripsListProps = {
  trips: Trip[];
  selectedTrip: Trip;
  setSelectedTrip: Dispatch<SetStateAction<Trip>>;
};

export function TripsList({
  trips,
  selectedTrip,
  setSelectedTrip,
}: TripsListProps) {
  const { setIsOpen } = useModalContext();
  const scrollRef = useHorizontalScroll<HTMLDivElement>();

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="trips-list">
      <div className="trips-list__list" ref={scrollRef}>
        {trips.map((trip) => (
          <MemoizedTripCard
            key={trip.id}
            trip={trip}
            isSelected={trip.id === selectedTrip.id}
            setSelectedTrip={setSelectedTrip}
          />
        ))}
      </div>

      <button
        className="trips-list__add-button"
        type="button"
        onClick={openModal}
      >
        <span>&#43;</span>
        <br />
        Add trip
      </button>
    </div>
  );
}
