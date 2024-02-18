import berlin from "./cities-images/berlin.jpg";
import dublin from "./cities-images/dublin.jpg";
import kyiv from "./cities-images/kyiv.jpg";
import lisbon from "./cities-images/lisbon.jpg";
import london from "./cities-images/london.jpg";
import madrid from "./cities-images/madrid.jpg";
import oslo from "./cities-images/oslo.jpg";
import paris from "./cities-images/paris.jpg";
import rome from "./cities-images/rome.jpg";
import tokyo from "./cities-images/tokyo.jpg";

export const citiesImages = {
  berlin,
  dublin,
  kyiv,
  lisbon,
  london,
  madrid,
  oslo,
  paris,
  rome,
  tokyo,
} as const;

export type CityImage = keyof typeof citiesImages;
