import { Note } from "@prisma/client";
export type CreateNote = Omit<Note, 'id'| 'createdAt' | 'updatedAt'>;
export type UseNote = Omit<Note, 'createdAt' | 'updatedAt'>
export type NoteID = Omit<Note, 'title' | 'content' | 'createdAt' | 'updatedAt'>