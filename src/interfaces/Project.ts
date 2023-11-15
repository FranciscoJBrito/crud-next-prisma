import { Project } from "@prisma/client";

export type CreateProject =Omit<Project, 'id' | 'createdAt'>