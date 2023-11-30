'use client'
import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useGlobalContext } from '@/hooks/useGlobalContext';

const CreateTaskBtn = (props: {projectID: number, columID: number}) => {
      const [showForm, setShowForm] = useState(false);
      const [title, setTitle] = useState('');
      const { createTask } = useGlobalContext();
      const handleForm = () => {
            setShowForm(!showForm)
      }

  return (
      <div className="flex items-center justify-center w-full h-min py-1">
      <button
        onClick={handleForm} 
        className={
          showForm
            ? "hidden"
            : "flex justify-center w-full h-full p-2 text-white/60 hover:bg-custom-gray rounded-lg"
        }
      >
        + Añadir tarea
      </button>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          createTask(props.projectID, {
            title,
            columID: props.columID
          })
          handleForm();
        }}
        className={showForm ? "flex flex-col w-full" : "hidden"}
      >
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Titulo de la columna..."
          className="block w-full flex-1 border-[1px] border-custom-gray rounded-lg bg-transparent py-1.5 px-2 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:outline-lime-500 "
          onChange={(e) => {setTitle(e.target.value)}}
          defaultValue={""}
        />
        <div className="flex items-center mt-4">
          <button
            type="submit"
            className=" bg-lime-400 py-2 rounded-lg w-1/3 text-custom-gray font-medium cursor-pointer"
          >
            Crear
          </button>
          <XMarkIcon
            onClick={handleForm}
            className="h-10 w-10 ml-2 text-white p-1.5 bg-custom-gray/40 rounded-lg cursor-pointer hover:bg-custom-gray"
          />
        </div>
      </form>
    </div>
  )
}

export default CreateTaskBtn