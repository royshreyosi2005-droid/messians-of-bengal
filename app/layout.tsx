import type { Metadata } from "next";

import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Montserrat } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-main",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Messians of Bengal",
    template: "%s | Messians of Bengal",
  },

  description:
    "Messians of Bengal is one of Bengal's biggest Lionel Messi fan communities. Join football lovers, explore exclusive jerseys, stay updated with events, and celebrate the passion for football together.",

  keywords: [
    "Messians of Bengal",
    "Lionel Messi",
    "Messi Fan Club",
    "Football Community",
    "Football Jerseys",
    "Messi Jersey",
    "Bengal Football",
    "Argentina Fans",
    "Football Merchandise",
  ],

  authors: [{ name: "Messians of Bengal" }],
  creator: "Messians of Bengal",
  publisher: "Messians of Bengal",
  icons: {
  icon: "/images/logo.jpg",
  shortcut: "/images/logo.jpg",
  apple: "/images/logo.jpg",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html
  lang="en"
  className={`${montserrat.variable} ${plusJakarta.variable}`}
>
  <body>
    <AnimatedBackground />
    {children}
  </body>
</html>
  );
}