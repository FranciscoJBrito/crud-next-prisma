import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
  params: { boardID: string };
}

export async function GET() {
  try {
    const colums = await prisma.colum.findMany({
      include: {
        notes: true,
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

export async function POST(request: Request, { params }: Params) {
  try {
    const { title } = await request.json();
    const createdColum = await prisma.colum.create({
      data: {
        boardID: Number(params.boardID),
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
