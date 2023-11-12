import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";


//Función para obtener las notas
export async function GET() {
  try {
    const notes = await prisma.note.findMany();
    return NextResponse.json(notes);
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


//Función para crear una nota
export async function POST(request: Request) {
  try {
    const { title, content, columID } = await request.json();
    const newNote = await prisma.note.create({
      data: {
        title,
        content,
        columID
      },
    });

    return NextResponse.json(newNote);
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
