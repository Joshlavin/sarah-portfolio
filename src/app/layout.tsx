import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import BrushStrokeReveal from "@/components/BrushStrokeReveal";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sarah Lavin | Production Designer & Visual Artist",
  description:
    "Los Angeles art department designer working across concept, set design, drafting, graphics, and build. From first sketch to finished install.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${instrumentSerif.variable} ${poppins.variable} antialiased`}
      >
        <BrushStrokeReveal />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
