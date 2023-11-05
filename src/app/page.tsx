import React from "react";
import { getNotes } from "@/http_func/getNotes";
import Form from "@/components/ui/Form";

const HomePage = async () => {
  const notes = await getNotes();
  interface Note {
    id: number;
    title: string;
    content: string;
  }

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="w-[50%]">
        <Form />
      </div>
      {notes.map((note: Note) => (
        <div key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
