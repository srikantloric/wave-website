import type { Metadata } from "next";
// 1. Import the font optimizer
import { Inter } from "next/font/google"; 
import "./globals.css"; 
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wave International",
  description: "School Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 3. Add the font variable to the body class */}
      <body className={`${inter.variable} font-sans antialiased text-gray-800 bg-gray-50 flex flex-col min-h-screen`}>
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}