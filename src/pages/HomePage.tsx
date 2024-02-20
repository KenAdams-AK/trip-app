import { CityForecast } from "@/modules/CityForecast/CityForecast";
import { TripsInfo } from "@/modules/TripsInfo/TripsInfo";

export function HomePage() {
  return (
    <>
      <TripsInfo />
      <CityForecast data={{}} />
    </>
  );
}
