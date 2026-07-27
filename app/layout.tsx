import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
        {/* Fixed Background */}
        <div className="fixed inset-0 -z-10">
          <div
            className="h-full w-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage:
                "linear-gradient(rgba(5,20,55,0.45), rgba(5,20,55,0.45)), url('/images/messi-collage.jpg')",
            }}
          />
        </div>

        {children}
      </body>
    </html>
  );
}