import MyModal from "../Modal/Modal";
import { useNotes } from "@/hooks/useNotes";
import Note from "../ui/Note";
import { useEffect } from "react";

const MyNotes = () => {
  const { notes, loadNotes } = useNotes();
  useEffect(() => {
    loadNotes();
  }, []);
  return (
    <div className="w-full h-full border-[1px] border-custom-gray bg-custom-black rounded-lg p-4 overflow-scroll">
      <MyModal title="Crear Nota" />
      {notes.map((note) => {
        return <Note key={note.id} id={note.id} title={note.title} content={note.content} />;
      })}
    </div>
  );
};

export default MyNotes;
