import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import BannerSlider from "@/components/Home/Banner/BannerSlider";
import Footer from "@/components/Home/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HuangChuang",
  description: "Huang Chuang Sports Official",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` bg-[#ECF2FE]`}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
