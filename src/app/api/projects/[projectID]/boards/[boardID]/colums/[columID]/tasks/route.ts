import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";


//Función para obtener las tareas
export async function GET() {
  try {
    const tasks = await prisma.task.findMany();
    return NextResponse.json(tasks);
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


//Función para crear una tarea
export async function POST(request: Request) {
  try {
    const { title, description, columID, priority, status } = await request.json();
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        columID,
        priority,
        status
      },
    });

    return NextResponse.json(newTask);
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
