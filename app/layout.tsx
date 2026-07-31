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
  title: "Messians of Bengal",
  description: "Official Fan Club Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en" className={plusJakarta.variable}>
      <body>
        <AnimatedBackground />

        {children}
      </body>
    </html>
  );
}