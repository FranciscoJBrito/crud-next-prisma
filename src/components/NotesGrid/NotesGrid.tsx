'use client'
import Card from "../ui/Card";

const NotesGrid = ({notes}: {notes: any}) => {

  interface Note {
    id: number;
    title: string;
    content: string;
  }
  return (
    <div className=" grid grid-cols-4 m-3 gap-4">
      <div>To do</div>
      <div>In progress</div>
      <div>Delay</div>
      <div>Finished</div>
      {notes.map((note: Note) => (
        <div key={note.id}>
          <Card title={note.title} content={note.content} />
        </div>
      ))}
    </div>
  );
};

export default NotesGrid;
