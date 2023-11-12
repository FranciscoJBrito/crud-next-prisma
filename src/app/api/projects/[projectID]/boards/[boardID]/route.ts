import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { title } from "process";

interface Params {
  params: { boardID: string };
}

//Función para obtener un tablero
export async function GET(request: Request, { params }: Params) {
  try {
    const board = await prisma.board.findFirst({
      where: {
        id: Number(params.boardID),
      },
      include: { project: true, colums: true  },
    });

    return NextResponse.json(board);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
