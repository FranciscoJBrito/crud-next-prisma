"use client";
import Colum from "@/components/Colum/Colum";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { XMarkIcon } from "@heroicons/react/20/solid";
import NavBar from "@/components/NavBar/NavBar";

interface Params {
  params: { slug: string | number };
}

const Board = ({ params }: Params) => {
  const { colums, loadColums, createColum } = useGlobalContext();
  //Use Effect para cargar las columnas
  useEffect(() => {
    loadColums(params.slug);
  }, []);
  //Estado para controlar el formulario de creación de la columna
  const [showForm, setShowForm] = useState(false);
  const handleFrom = () => {
    setShowForm(!showForm);
  };

  //Estado para almacenar el valor del input
  const [title, setTitle] = useState("");

  return (
    <>
      <div className="fixed max-w-[92.5%]  w-full">
        <NavBar />
      </div>
      <div className="flex min-h-100% w-auto mt-20">
        {colums.map((colum, i) => (
          <Colum
            key={i}
            id={colum.id}
            projectID={colum.projectID}
            title={colum.title}
          />
        ))}
        <div className="flex items-center justify-center bg-custom-gray/20 border-[1px] border-dashed border-custom-gray rounded-lg min-w-[300px] h-min">
          <button
            onClick={handleFrom}
            className={
              showForm
                ? "hidden"
                : "flex justify-center w-full h-full p-2 text-white/20"
            }
          >
            + crear columna
          </button>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await createColum({
                title,
                projectID: Number(params.slug),
              });
              handleFrom();
            }}
            className={showForm ? "flex flex-col w-full p-4" : "hidden"}
          >
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Titulo de la columna..."
              className="block w-full flex-1 border-[1px] border-custom-gray rounded-lg bg-transparent py-1.5 px-2 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:outline-lime-500 "
              onChange={(e) => setTitle(e.target.value)}
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
                onClick={handleFrom}
                className="h-10 w-10 ml-2 text-white p-1.5 bg-custom-gray/40 rounded-lg cursor-pointer hover:bg-custom-gray"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Board;
