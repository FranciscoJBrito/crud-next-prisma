import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import MyModal from "@/components/Modal/Modal";
import { NotesProvider } from "@/context/NoteContext";

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
        <div className="flex">
          <Sidebar />
          <NotesProvider>
            {/* <MyModal title="Crear nota" /> */}
            <div className="flex flex-col h-screen w-full pt-[18px] pb-9 px-8">
            {children}
            </div>
          </NotesProvider>
        </div>
      </body>
    </html>
  );
}
