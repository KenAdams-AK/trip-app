import { useCallback, useState } from "react";

import { Modal } from "@/components/Modal/Modal";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { TripsList } from "@/components/TripsList/TripsList";

import { TripForecast } from "@/layout/TripForecast/TripForecast";

import "./TripsInfo.scss";

export function TripsInfo() {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddTrip = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <section className="trips-info">
      <h1>Weather Forecast</h1>
      <SearchBar />
      <TripsList trips={[]} handleAddTrip={handleAddTrip} />
      <TripForecast data={{}} />
      {isOpen && (
        <Modal handleClose={handleAddTrip}>
          <h1>Modal</h1>
        </Modal>
      )}
    </section>
  );
}
