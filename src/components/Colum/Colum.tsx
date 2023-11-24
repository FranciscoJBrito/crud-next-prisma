import { useState } from "react";
import { Colum } from "@prisma/client";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import ColumDropDown from "../ui/ColumDropDown";
import Card from "../ui/Card";

const Colum = (colum: Colum) => {
  const { updateColum } = useGlobalContext();
  const [title, setTitle] = useState(colum.title);
  const handleBlur = async () => {
    if (title === colum.title) {
      return null;
    } else {
      await updateColum(colum.id, {
        projectID: colum.projectID,
        title: title,
      });
    }
  };

  return (
    <div className="min-w-[300px] h-min  bg-custom-gray/50 rounded-lg p-2 mr-4">
      <div className="flex justify-between w-full mb-4">
        <div className="w-full ">
        <input
          className="block w-5/6 cursor-pointer bg-transparent px-3 focus:rounded-sm focus-visible:outline-lime-500 focus-visible:outline-1 focus-visible:outline-none focus-visible:shadow-custom-lime"
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleBlur}
          defaultValue={colum.title}
        />
        </div>
        <div className="relative w-1/6">
          <ColumDropDown />
        </div>
      </div>
      
      <div className="flex flex-col">
        <Card title="Tarea N1"/>
        <Card title="Tarea N2"/>
      </div>
    </div>
  );
};

export default Colum;
