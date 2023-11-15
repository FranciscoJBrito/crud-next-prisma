import { GlobalContext } from "@/context/TasksContext";
import { useContext } from "react";

export const useGlobalContext = () => {
      const context = useContext(GlobalContext);
      if(!context){
            throw new Error('useNotes must be used within a NotesProvider')
      }
      return context;
}