import { getNotes } from "@/http_func/getNotes";

const HomePage = async () => {
  const notes = await getNotes();
  interface Note {
    id: number;
    title: string;
    content: string;
  }

  

  return (
    <div>
      <div>
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
