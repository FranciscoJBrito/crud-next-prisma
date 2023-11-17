'use client'
import Colum from "@/components/Colum/Colum";
import {useEffect} from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";

interface Params {
  params: { slug: string | number };
}

const Board = ({ params }: Params) => {
  const { projects ,loadColums } = useGlobalContext();
  
  return (
    <div className="grid grid-cols-5 w-full">
      <button>+ crear columna</button>
      <Colum />
    </div>
  );
};

export default Board;
