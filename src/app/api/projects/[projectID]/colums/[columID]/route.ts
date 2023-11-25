import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: { columID: string };
}

//Función para obtener una columna
export async function GET(request: Request, { params }: Params) {
  try {
    const colum = await prisma.colum.findFirst({
      where: {
        id: Number(params.columID),
      },
      include: {
        project: true,
        tasks: true,
      },
    });
    return NextResponse.json(colum);
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

//Función para editar una columna
export async function PUT(request: Request, { params }: Params) {
  try {
    const { title, projectID } = await request.json();
    const updatedColum = await prisma.colum.update({
      where: {
        id: Number(params.columID), 
        projectID: projectID
      },
      data: {
        title,
      },
    });
    return NextResponse.json(updatedColum)
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

//Función para eliminar una columna
export async function DELETE(request: Request, { params }: Params) {
  try {
    const deletedColum = await prisma.colum.delete({
      where: {
        id: Number(params.columID),
      },
    });
    return NextResponse.json(deletedColum);
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
