import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Home/Footer/Footer";

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
