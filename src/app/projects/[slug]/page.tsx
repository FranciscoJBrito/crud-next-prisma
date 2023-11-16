import Colum from "@/components/Colum/Colum";
import { useRouter } from "next/router";
import React from "react";
interface Params {
  params: { slug: string | number };
}

const Board = ({ params }: Params) => {
  return (
  <div className="grid grid-cols-5 w-full">
    <Colum />
  </div>
  );
};

export default Board;
