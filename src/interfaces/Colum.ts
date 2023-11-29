import { Colum, Task } from "@prisma/client";
export type CreateColum =Omit<Colum, 'id'>
export type ColumPlusTasks =  Colum & { tasks: Task[] }