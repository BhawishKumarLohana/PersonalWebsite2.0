import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bhawish Kumar",
  description: "Personal Webpage of Bhawish Kumar to showcase exprience, skills, projects, interets & blogs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head><link rel="icon" href="/logo.png" /></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer/>

      </body>
    </html>
  );
}
