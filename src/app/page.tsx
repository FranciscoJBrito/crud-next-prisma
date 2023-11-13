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
      <div className="flex flex-grow justify-between">
        <div className="flex flex-col mr-4">
          <h2>Mis tareas</h2>
          <MyTasks />
        </div>
        <div className="flex flex-col w-full ml-4">
          <h2>Mis Notas</h2>
          <MyNotes />
        </div>
      </div>
      {/* <NotesGrid notes={notes} /> */}
    </div>
  );
};

export default HomePage;
