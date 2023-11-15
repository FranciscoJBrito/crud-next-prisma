import { useState } from "react";
import { useNotes } from "@/hooks/useNotes";
import Tiptap from "./TextEditor";

const Form = ({handleModal}: {handleModal: any}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { createNote } = useNotes();

  return (
    <form
      className="w-full flex flex-col items-start justify-center"
      onSubmit={async (e) => {
        e.preventDefault();
        console.log(title, content)
        await createNote({ 
          title, 
          content 
        });
        handleModal()
        
      }}
    >
      {/*Titulo de la nota*/}
      <label
        htmlFor="title"
        className="block w-full text-sm font-medium leading-6 text-white"
      >
        Titulo de la nota
      </label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Titulo de la nota"
        className="block w-full flex-1 border-[1px] border-custom-gray rounded-lg bg-transparent py-1.5 px-2 my-2 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:outline-none"
        onChange={(e) => setTitle(e.target.value)}
      />

      {/*Contenido de la nota*/}
      <label
        htmlFor="content"
        className="block mt-4 w-full text-sm font-medium leading-6 text-white"
      >
        Contenido de la nota
      </label>
      <Tiptap />
      <textarea
        name="content"
        id="content"
        placeholder="Contenido de la nota"
        className="block w-full flex-1 border-[1px] rounded-lg border-custom-gray bg-transparent py-1.5 pl-1 my-2 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:outline-none"
        onChange={(e) => setContent(e.target.value)}
      />

      {/*Botón para crear nota*/}
      <button type="submit" className="mt-4 bg-lime-400 py-2 rounded-lg w-full text-custom-gray font-medium cursor-pointer">
        Crear
      </button>
    </form>
  );
};

export default Form;
