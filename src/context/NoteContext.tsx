"use client";
import { createContext, useState } from "react";

interface Note {
  title: string;
  content: string;
}

export const NoteContext = createContext<{
  notes: any[];
  loadNotes: () => Promise<void>;
  createNote: (note: Note) => Promise<void>;
}>({
  notes: [],
  loadNotes: async () => {},
  createNote: async (note: Note) => {},
});

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<any[]>([]);

  const loadNotes = async () => {
    const res = await fetch("/api/notes");
    const data = await res.json();
    setNotes(data);
  };

  const createNote = async (note: Note) => {
    const res = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const newNote = await res.json();
    setNotes([...notes, newNote]);
  };

  return (
    <NoteContext.Provider value={{ notes, loadNotes, createNote }}>
      {children}
    </NoteContext.Provider>
  );
};
