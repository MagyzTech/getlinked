import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import "./globals.css";

import "react-vertical-timeline-component/style.min.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to GetLinked",
  description: "Igniting a Revolution in HR Innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen grid grid-rows-[auto,1fr,auto]">
          {/* header */}
          <Header />
          {children}
          <Footer />
          {/* footer */}
        </main>
      </body>
    </html>
  );
}
