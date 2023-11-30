import { Task } from "@prisma/client";

export type CreateTask =Omit<Task, 'id' | 'description' | 'priority' | 'status' | 'createdAt' | 'updatedAt'>