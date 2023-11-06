import { useState } from "react";
import { useNotes } from "@/hooks/useNotes";

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
        className="block w-full text-sm font-medium leading-6 text-gray-900"
      >
        Titulo de la nota
      </label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Titulo de la nota"
        className="block w-full flex-1 border-[1px] border-black/10 rounded-lg bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        onChange={(e) => setTitle(e.target.value)}
      />

      {/*Contenido de la nota*/}
      <label
        htmlFor="content"
        className="block mt-4 w-full text-sm font-medium leading-6 text-gray-900"
      >
        Contenido de la nota
      </label>
      <textarea
        name="content"
        id="content"
        placeholder="Contenido de la nota"
        className="block w-full flex-1 border-[1px] rounded-lg border-black/10 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        onChange={(e) => setContent(e.target.value)}
      />

      {/*Boton para crear nota*/}
      <button className="mt-4 bg-lime-400 py-2 rounded-lg w-full text-white cursor-pointer">
        Crear
      </button>
    </form>
  );
};

export default Form;
