import { useState } from "react";
import { Colum } from "@prisma/client";
import { useGlobalContext } from "@/hooks/useGlobalContext";

const Colum = (colum: Colum) => {
  const { updateColum } = useGlobalContext();
  const [title, setTitle] = useState(colum.title);
  const handleBlur = async () => {
    if ( title === colum.title) {
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
      <input
        className="cursor-pointer bg-transparent pl-2 focus:rounded-sm focus-visible:outline-lime-500 focus-visible:outline-1 focus-visible:outline-none focus-visible:shadow-custom-lime"
        onChange={(e) => setTitle(e.target.value)}
        onBlur={handleBlur}
        defaultValue={colum.title}
      />
    </div>
  );
};

export default Colum;
