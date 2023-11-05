import { getNotes } from "@/http_func/getNotes";
import Form from "@/components/ui/Form";
import MyModal from "@/components/Modal/Modal";

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
        <MyModal title="Crear nota"/>
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
