import { useCallback, useState } from "react";

import { CityForecast } from "@/components/CityForecast/CityForecast";
import { Modal } from "@/components/Modal/Modal";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { TripForecast } from "@/components/TripForecast/TripForecast";
import { TripsList } from "@/components/TripsList/TripsList";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddTrip = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <main>
      <h1>Weather Forecast</h1>
      <SearchBar />
      <TripsList trips={[]} handleAddTrip={handleAddTrip} />
      <CityForecast data={{}} />
      <TripForecast data={{}} />
      {isOpen && (
        <Modal handleClose={handleAddTrip}>
          <h1>Modal</h1>
        </Modal>
      )}
    </main>
  );
}

export default App;
