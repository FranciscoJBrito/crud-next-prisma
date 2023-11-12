'use client'
import { NoteContent } from "@/interfaces/Note";
import Card from "../ui/Card";
import { Note } from "@prisma/client";
import CreateColum from "../ui/CreateColum";

const NotesGrid = ({notes}: {notes: any}) => {

  return (
    <div className="w-full h-full grid grid-cols-5 gap-4">
      <CreateColum />
      {/* <div>To do</div>
      <div>In progress</div>
      <div>Delay</div>
      <div>Finished</div> */}
      {/* {notes.map((note: NoteContent) => (
          //<Card key={note.id} id={note.id} title={note.title} content={note.content} />
      ))} */}
    </div>
  );
};

export default NotesGrid;
