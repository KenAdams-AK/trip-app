import berlin from "@/assets/cities-images/berlin.jpg";
import dublin from "@/assets/cities-images/dublin.jpg";
import kyiv from "@/assets/cities-images/kyiv.jpg";
import lisbon from "@/assets/cities-images/lisbon.jpg";
import london from "@/assets/cities-images/london.jpg";
import madrid from "@/assets/cities-images/madrid.jpg";
import oslo from "@/assets/cities-images/oslo.jpg";
import paris from "@/assets/cities-images/paris.jpg";
import rome from "@/assets/cities-images/rome.jpg";
import tokyo from "@/assets/cities-images/tokyo.jpg";

export const citiesData = {
  Berlin: berlin,
  Dublin: dublin,
  Kyiv: kyiv,
  Lisbon: lisbon,
  London: london,
  Madrid: madrid,
  Oslo: oslo,
  Paris: paris,
  Rome: rome,
  Tokyo: tokyo,
} as const;

export type Cities = keyof typeof citiesData;
