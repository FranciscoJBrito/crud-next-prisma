import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

// Función para obtener todos los proyectos
export async function GET() {
  try {
    const allProjects = await prisma.project.findMany(
      {
        include: {board:true}
      }
    );
    return NextResponse.json(allProjects);
  } catch (error) {
    return NextResponse.json(
      {
        message: error,
      },
      {
        status: 500,
      }
    );
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
    });
    return NextResponse.json(createdProject);
  } catch (error) {
    return NextResponse.json(
      {
        message: error,
      },
      {
        status: 500,
      }
    );
  }
}
