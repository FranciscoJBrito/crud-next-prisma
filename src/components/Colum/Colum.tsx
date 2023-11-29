import { useEffect, useState } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import ColumDropDown from "../ui/ColumDropDown";
import Card from "../ui/Card";
import { ColumPlusTasks } from "@/interfaces/Colum";

const ColumComponent = (colum: ColumPlusTasks) => {
  const { updateColum } = useGlobalContext();
  const [title, setTitle] = useState(colum.title);

  //Manejo de titulo editable de la columna
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
        {colum.tasks.map((task) => (
          <Card key={task.id} title={task.title} />
        ))}
        <Card title={`Tarea N${colum.id}`} />
      </div>
    </div>
  );
};

export default ColumComponent;
