import { Lora, Source_Sans_Pro } from "next/font/google";

export const lora = Lora({
  subsets: ["latin"],
  //   variable: "--font-lora",
  display: "swap",
});

export const source_sans_pro = Source_Sans_Pro({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  //   variable: "--font-source_sans_pro",
  display: "swap",
});
