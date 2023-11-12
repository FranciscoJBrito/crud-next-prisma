import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: { projectID: string };
}

//Función para obtener un proyecto
export async function GET(request: Request, { params }: Params) {
  try {
    const project = await prisma.project.findFirst({
      where: {
        id: Number(params.projectID),
      },
      include: {
            board: true
      }
    });
    return NextResponse.json(project);
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

//Función para actualizar un proyecto
export async function PUT() {}

//Función para eliminar un proyecto
export async function DELETE() {}
