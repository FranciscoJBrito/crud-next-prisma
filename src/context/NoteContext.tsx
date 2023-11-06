"use client";
import { createContext, useState } from "react";
import {CreateNote} from "@/interfaces/Note"
import { Note } from "@prisma/client";


export const NoteContext = createContext<{
  notes: Note[];
  loadNotes: () => Promise<void>;
  createNote: (note: CreateNote) => Promise<void>;
  deleteNote: (id: number | undefined) => Promise<void>;
}>({
  notes: [],
  loadNotes: async () => {},
  createNote: async (note: CreateNote) => {},
  deleteNote: async (id: number | undefined) => {}
});

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  //Funcion para cargar las notas
  const loadNotes = async () => {
    const res = await fetch("/api/notes");
    const data = await res.json();
    setNotes(data);
  };

  //Funcion para crear  notas
  const createNote = async (note: CreateNote) => {
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

  //Funcion para borrar una nota
  const deleteNote = async (id: number | undefined) => {
    const res = await fetch(`api/notes/${id}`, {
      method: 'DELETE',
    })
    const data = await res.json()
    setNotes(notes.filter(note => note.id != id))

  }

  //Funcion para actualizar una notas
  const updateNote = async (id: number | undefined) => {
    const res = await fetch(`api/notes/${id}`, {
      method: 'PUT',
    })
    const data = await res.json()
    setNotes(notes.filter(note => note.id != id))
  }

  return (
    <NoteContext.Provider value={{ notes, loadNotes, createNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};
