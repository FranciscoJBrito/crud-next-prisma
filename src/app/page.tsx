"use client";
import NotesGrid from "@/components/NotesGrid/NotesGrid";
import { useNotes } from "@/hooks/useNotes";
import { useEffect } from "react";

const HomePage = () => {
  const { notes, loadNotes } = useNotes();
  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="w-full h-full overflow-x-scroll">
      <NotesGrid notes={notes} />
    </div>
  );
};

export default HomePage;
