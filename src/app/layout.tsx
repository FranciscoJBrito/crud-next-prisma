import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Sidebar from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes App",
  description: "Register your notes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-cream">
      <body className={inter.className}>
        <NavBar />
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
