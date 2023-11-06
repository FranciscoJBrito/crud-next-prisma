import { NoteContext } from "@/context/NoteContext";
import { useContext } from "react";

export const useNotes = () => {
      const context = useContext(NoteContext)
      if(!context){
            throw new Error('useNotes must be used within a NotesProvider')
      }
      return context;
}