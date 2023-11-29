import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
  params: {projectID: string}
}


//Función para obtener las columnas
export async function GET(request: Request, context: { params: any}) {
  try {
    const colums = await prisma.colum.findMany({
      where: {
        projectID: Number(context.params.projectID)
      },
      include: {
        project: true,
        tasks: true
      },
    });
    //return NextResponse.json(context.params.projectID)
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
