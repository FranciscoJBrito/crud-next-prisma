import { Note } from "@prisma/client";
export type CreateNote = Omit<Note, 'id'| 'createdAt' | 'updatedAt'>;
export type NoteContent = Omit<Note, 'createdAt' | 'updatedAt'>
export type NoteID = Omit<Note, 'title' | 'content' | 'createdAt' | 'updatedAt'>

import { Colum } from "@prisma/client";
export type GetColum = Omit<Colum, 'title'>