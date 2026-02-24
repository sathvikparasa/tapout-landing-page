import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TapOut — Never Get Ticketed Again",
  description: "Real-time TAPS enforcement alerts for UC Davis students. Community-powered parking intelligence.",
  keywords: ["UC Davis", "parking", "TAPS", "parking tickets", "TapOut"],
  authors: [{ name: "TapOut" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "TapOut — Never Get Ticketed Again",
    description: "Real-time TAPS enforcement alerts for UC Davis students.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${plusJakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
