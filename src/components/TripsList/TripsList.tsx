import { Dispatch, SetStateAction, useLayoutEffect, useState } from "react";

import { Trip } from "@/models/trip";

import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import { useModalContext } from "@/hooks/useModalContext";

import { ScrollButton } from "@/layout/ScrollButton/ScrollButton";
import { MemoizedTripCard } from "@/layout/TripCard/TripCard";

import "./TripsList.scss";

type TripsListProps = {
  trips: Trip[];
  selectedTrip: Trip;
  setSelectedTrip: Dispatch<SetStateAction<Trip>>;
};

const SCROLL_OFFSET = 100;

export function TripsList({
  trips,
  selectedTrip,
  setSelectedTrip,
}: TripsListProps) {
  const { setIsOpen } = useModalContext();
  const listRef = useHorizontalScroll<HTMLDivElement>(); // scroll on mouse wheel
  const [hasHorizontalScroll, setHasHorizontalScroll] = useState(false);

  useLayoutEffect(() => {
    if (!listRef.current) {
      return;
    }

    const { scrollWidth, clientWidth } = listRef.current;
    setHasHorizontalScroll(scrollWidth > clientWidth);
  }, [listRef, trips]);

  const openModal = () => {
    setIsOpen(true);
  };

  const scroll = (scrollOffset: number) => {
    if (!listRef.current) {
      return;
    }
    listRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="trips-list">
      <ScrollButton
        isHidden={!hasHorizontalScroll}
        handleScroll={scroll}
        scrollOffset={SCROLL_OFFSET}
      >
        <div className="trips-list__list" ref={listRef}>
          {trips.map((trip) => (
            <MemoizedTripCard
              key={trip.id}
              trip={trip}
              isSelected={trip.id === selectedTrip.id}
              setSelectedTrip={setSelectedTrip}
            />
          ))}
        </div>
      </ScrollButton>

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
