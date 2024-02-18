import { CityForecast } from "@/modules/CityForecast/CityForecast";
import { TripsInfo } from "@/modules/TripsInfo/TripsInfo";

import { Footer } from "@/layout/Footer/Footer";
import { Header } from "@/layout/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <TripsInfo />
        <CityForecast data={{}} />
      </main>
      <Footer />
    </>
  );
}

export default App;
