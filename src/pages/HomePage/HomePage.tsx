import { useState } from "react";

import { Trip } from "@/models/trip";

import { useTrips } from "@/hooks/useTrips";

import { AddTripForm } from "@/components/AddTripForm/AddTripForm";
import { CityForecast } from "@/components/CityForecast/CityForecast";
import { Modal } from "@/components/Modal/Modal";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { TripForecast } from "@/components/TripForecast/TripForecast";
import { TripsList } from "@/components/TripsList/TripsList";

import "./HomePage.scss";

export function HomePage() {
  const { filteredTrips: trips, setTrips } = useTrips();
  const [selectedTrip, setSelectedTrip] = useState<Trip>(trips[0]);

  return (
    <>
      <section className="trips-info">
        <h1>Weather Forecast</h1>
        <SearchBar />
        <TripsList
          trips={trips}
          selectedTrip={selectedTrip}
          setSelectedTrip={setSelectedTrip}
        />
        <TripForecast tripData={selectedTrip} />
      </section>

      <CityForecast
        city={selectedTrip.destination.city}
        departureDate={selectedTrip.departureDate}
      />

      <Modal>
        <AddTripForm trips={trips} setTrips={setTrips} />
      </Modal>
    </>
  );
}
