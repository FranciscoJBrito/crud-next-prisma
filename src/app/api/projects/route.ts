import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

// Función para obtener todos los proyectos
export async function GET() {
  try {
    const allProjects = await prisma.project.findMany();
    return NextResponse.json(allProjects);
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

//Función para crear proyecto
export async function POST(request: Request) {
  try {
    const { title } = await request.json();
    const createdProject = await prisma.project.create({
      data: {
        title,
      },
      include: {
        colums: true
      }
    });
    return NextResponse.json(createdProject);
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
