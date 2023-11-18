import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

//Función para obtener las columnas
export async function GET() {
  try {
    const colums = await prisma.colum.findMany({
      include: {
        project: true,
        tasks: true
      },
    });
    return NextResponse.json(colums);
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

//Función para crear una columna
export async function POST(request: Request) {
  try {
    const { title, projectID } = await request.json();
    const createdColum = await prisma.colum.create({
      data: {
        projectID, 
        title,
      },
    });
    return NextResponse.json(createdColum);
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
