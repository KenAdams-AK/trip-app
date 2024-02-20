import { useState } from "react";

import { defaultTrip } from "@/mocks/defaultTrip";

import { Trip } from "@/models/trip";

import { useLocalStorage } from "@/hooks/useLocalStorage";

import { AddTripForm } from "@/components/AddTripForm/AddTripForm";
import { CityForecast } from "@/components/CityForecast/CityForecast";
import { Modal } from "@/components/Modal/Modal";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { TripsList } from "@/components/TripsList/TripsList";

import { TripForecast } from "@/layout/TripForecast/TripForecast";

import "./HomePage.scss";

export function HomePage() {
  const [trips, setTrips] = useLocalStorage<Trip[]>("trips", [defaultTrip]);
  const [selectedTrip, setSelectedTrip] = useState<Trip>(trips[0]);

  return (
    <>
      <section className="trips-info">
        <h1>Weather Forecast</h1>
        <SearchBar />
        {/* <input type="search" placeholder="Search your trip" /> */}
        <TripsList
          trips={trips}
          selectedTrip={selectedTrip}
          setSelectedTrip={setSelectedTrip}
        />
        <TripForecast data="" />
        <CityForecast data="" />
      </section>

      <Modal>
        <AddTripForm trips={trips} setTrips={setTrips} />
      </Modal>
    </>
  );
}
