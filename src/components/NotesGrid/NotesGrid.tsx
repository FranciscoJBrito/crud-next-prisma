'use client'
import { CreateNote, UseNote } from "@/interfaces/Note";
import Card from "../ui/Card";
import { Note } from "@prisma/client";

const NotesGrid = ({notes}: {notes: any}) => {

  return (
    <div className=" grid grid-cols-4 m-3 gap-4">
      <div>To do</div>
      <div>In progress</div>
      <div>Delay</div>
      <div>Finished</div>
      {notes.map((note: UseNote) => (
          <Card key={note.id} id={note.id} title={note.title} content={note.content} />
      ))}
    </div>
  );
};

export default NotesGrid;
