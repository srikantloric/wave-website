// app/layout.tsx
import type { Metadata } from "next";
// Import your global css here (where Tailwind is setup)
import "./globals.css"; 
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

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
      <body className="font-sans antialiased text-gray-800 bg-gray-50 flex flex-col min-h-screen">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        {/* This main tag renders the content of the specific page user is on */}
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}