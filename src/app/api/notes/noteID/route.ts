import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
  params: { noteID: string };
}

//Función para obtener una nota
export async function GET(request: Request, { params }: Params) {
  try {
    const note = await prisma.note.findFirst({
      where: {
        id: Number(params.noteID),
      },
    });
    return NextResponse.json(note);
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

//Función para actualizar una nota
export async function PUT(request: Request, { params }: Params) {
  try {
    const { title, content } = await request.json();
    const updatedNote = await prisma.note.update({
      where: {
        id: Number(params.noteID),
      },
      data: {
        title,
        content,
      },
    });
    return NextResponse.json(updatedNote);
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

//Función para eliminar una nota
export async function DELETE(request: Request, { params }: Params) {
  try {
    const deletedNote = await prisma.note.delete({
      where: {
        id: Number(params.noteID),
      },
    });
    return NextResponse.json(deletedNote);
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
