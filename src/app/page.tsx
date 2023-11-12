"use client";
import MyNotes from "@/components/MyNotes/MyNotes";
import MyTasks from "@/components/MyTasks/MyTasks";
import NavBar from "@/components/NavBar/NavBar";
import NotesGrid from "@/components/NotesGrid/NotesGrid";
import { useNotes } from "@/hooks/useNotes";
import { useEffect } from "react";

const HomePage = () => {
  const { notes, loadNotes } = useNotes();
  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <NavBar />
      <h2>Mis tareas</h2>
      <div className="flex-grow flex justify-between">
          <MyTasks />
          <MyNotes />
      </div>
      {/* <NotesGrid notes={notes} /> */}
    </div>
  );
};

export default HomePage;
