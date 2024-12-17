import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Bookings } from "@/components/bookings";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/cartContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Purple Star",
  description: "A stationary shop",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
        <Header/>
        <Navbar/>
        {children}
        </CartProvider>
        <Footer/>
      </body>
    </html>
  );
}
