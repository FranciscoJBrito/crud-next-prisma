import { useRouter } from "next/router";
import React from "react";
interface Params {
  params: {slug: string | number}
}

const Board = ({params}: Params) => {
  return <div>pagina Número {params.slug}</div>;
};

export default Board;
