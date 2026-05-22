import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, EB_Garamond } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel-var",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-var",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-eb-var",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hpssociety.org.in"),
  title: "The Hyderabad Public School Society — Est. 1923",
  description:
    "The apex governing body of The Hyderabad Public Schools — Begumpet, Ramanthapur, Kadapa and Warangal. A century of soaring, leading and serving.",
  openGraph: {
    title: "The Hyderabad Public School Society — Est. 1923",
    description:
      "The apex governing body of The Hyderabad Public Schools — Begumpet, Ramanthapur, Kadapa and Warangal.",
    images: ["/images/crest.jpeg"],
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
      className={`${cinzel.variable} ${cormorant.variable} ${ebGaramond.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
