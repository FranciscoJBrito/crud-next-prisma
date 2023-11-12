import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

//Función para obtener todos los tableros
export async function GET() {
  try {
    const allBoards = await prisma.board.findMany();
    return NextResponse.json(allBoards)
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
