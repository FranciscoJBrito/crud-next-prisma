"use client";
import { createContext, useState } from "react";
import {CreateNote, GetColum} from "@/interfaces/Note"
import { Note } from "@prisma/client";
import { arrayMove } from "@dnd-kit/sortable";


export const NoteContext = createContext<{
  notes: Note[];
  loadNotes: () => Promise<void>;
  createNote: (note: CreateNote) => Promise<void>;
  deleteNote: (id: number | undefined) => Promise<void>;
  handleDragEnd: (event: any) => void
}>({
  notes: [],
  loadNotes: async () => {},
  createNote: async (note: CreateNote) => {},
  deleteNote: async (id: number | undefined) => {},
  handleDragEnd: (event: any) => {}
});

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  //Función para cargar las notas
  const loadNotes = async () => {
    const res = await fetch("/api/notes");
    const data = await res.json();
    setNotes(data);
  };

  //Función para crear  notas
  const createNote = async (note: CreateNote) => {
    const res = await fetch(`/api/notes`, {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const newNote = await res.json();
    setNotes([...notes, newNote]);
  };

  //Función para borrar una nota
  const deleteNote = async (id: number | undefined) => {
    const res = await fetch(`api/notes/${id}`, {
      method: 'DELETE',
    })
    const data = await res.json()
    setNotes(notes.filter(note => note.id != id))

  }

  //Función para actualizar una notas
  const updateNote = async (id: number | undefined) => {
    const res = await fetch(`api/notes/${id}`, {
      method: 'PUT',
    })
    const data = await res.json()
    setNotes(notes.filter(note => note.id != id))
  }

  //Función para manejar el drag and drop
  function handleDragEnd(event: any) {
    const {active, over} = event;
    
    if (active.id !== over.id) {
      setNotes((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }


  return (
    <NoteContext.Provider value={{ notes, loadNotes, createNote, deleteNote, handleDragEnd }}>
      {children}
    </NoteContext.Provider>
  );
};
