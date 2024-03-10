import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";


export const metadata: Metadata = {
  title: "Car Rental",
  description: "Find, book, or rent a car - quickly and easily! We have the best cars for you to choose from. Book now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
          {children}
        <Footer/>
      </body>
    </html>
  );
}
