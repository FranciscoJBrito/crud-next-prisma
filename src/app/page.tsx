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
    <div>
      <NotesGrid notes={notes} />
    </div>
  );
};

export default HomePage;
