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
openGraph: {
  title: "Messians of Bengal",
  description:
    "One of Bengal's biggest Lionel Messi fan communities. Explore exclusive jerseys, connect with fellow fans, and celebrate football together.",
  url: "https://messians-of-bengal-k3u25pj4d-shree21.vercel.app",
  siteName: "Messians of Bengal",
  images: [
    {
      url: "/images/messi-collage.jpg",
      width: 1200,
      height: 630,
      alt: "Messians of Bengal",
    },
  ],
  locale: "en_US",
  type: "website",
},

twitter: {
  card: "summary_large_image",
  title: "Messians of Bengal",
  description:
    "One of Bengal's biggest Lionel Messi fan communities.",
  images: ["/images/messi-collage.jpg"],
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