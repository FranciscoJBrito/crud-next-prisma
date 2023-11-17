import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/libs/prisma";

interface Params {
  params: { id: string };
}

//Función para las peticiones GET (obtener una nota)
export async function GET(request: Request, { params }: Params) {
  try {
    const note = await prisma.task.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    /* if (!note)
      return NextResponse.json(
        {
          message: "Nota not found",
        },
        {
          status: 404,
        }
      ); */

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

// Función para las peticiones PUT (actualizar una nota)
export async function PUT(request: Request, { params }: Params) {
  try {
    const { title, description, priority, status } = await request.json();

    const updatedNote = await prisma.task.update({
      where: {
        id: Number(params.id),
      },
      data: {
        title,
        description,
        priority,
        status,
      },
    });

    if (!updatedNote)
      return NextResponse.json({ message: "Nota not found" }, { status: 404 });

    return NextResponse.json(updatedNote);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Note not found",
          },
          {
            status: 404,
          }
        );
      }

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

//Función para las peticiones DELETE (eliminar una nota)
export async function DELETE(request: Request, { params }: Params) {
  try {
    const deletedNote = await prisma.task.delete({
      where: {
        id: Number(params.id), 
      },
    });

    /* if (!deletedNote)
      return NextResponse.json({ message: "Note not found" }, { status: 404 }); */

    return NextResponse.json(deletedNote);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Note not found",
          },
          {
            status: 404,
          }
        );
      }

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
