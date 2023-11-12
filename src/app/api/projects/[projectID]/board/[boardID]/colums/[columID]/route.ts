import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server';

interface Params {
      params: { columID: string };
    }

export async function DELETE(request: Request, {params}: Params) {
      const deletedColum = await prisma.colum.delete({
            where: {
                  id: Number(params.columID)
            }
      })

      return NextResponse.json(deletedColum)
}