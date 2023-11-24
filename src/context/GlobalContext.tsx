"use client";
import { createContext, useState } from "react";
import { Project, Colum } from "@prisma/client";
import { CreateProject } from "@/interfaces/Project";
import { CreateColum } from "@/interfaces/Colum";

export const GlobalContext = createContext<{
  projects: Project[];
  loadProjects: () => Promise<void>;
  createProject: (project: CreateProject) => Promise<void>;
  colums: Colum[];
  loadColums: (id: string |number) => Promise<void>;
  createColum: (colum: CreateColum) => Promise<void>;
  updateColum: (id: number, colum: CreateColum) => Promise<void>
}>({
  projects: [],
  loadProjects: async () => {},
  createProject: async (project: CreateProject) => {},
  colums: [],
  loadColums: async (id: string | number) => {},
  createColum: async (colum: CreateColum) => {},
  updateColum: async (id: number, colum: CreateColum) => {}
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [colums, setColums] = useState<Colum[]>([])


/* <-- FUNCIONES DE PROYECTOS --> */ 

  //Función para cargar los proyectos
  const loadProjects = async () => {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  //Función para crear un proyecto
  const createProject = async (project: CreateProject) => {
    const res = await fetch(`/api/projects`, {
      method: "POST",
      body: JSON.stringify(project),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newProject = await res.json();
    setProjects([...projects, newProject]);
  };


  /* <-- FUNCIONES DE COLUMNAS --> */

  //Función para cargar las columnas
  const loadColums = async (id: number | string) => {
    const res = await fetch(`/api/projects/${id}`)
    const data = await res.json()
    setColums(data.colums);
  }

  //Función para crear una columna
  const createColum = async (colum: CreateColum) => {
    const res = await fetch(`/api/projects/${colum.projectID}/colums`, {
      method: "POST",
      body: JSON.stringify(colum),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newColum = await res.json()
    setColums([...colums, newColum])
  }

  //Función para editar el titulo de una columna
  const updateColum = async (id: number, colum: CreateColum) => {
    const res = await fetch(`/api/projects/${colum.projectID}/colums/${id}`, {
      method: "PUT",
      body: JSON.stringify(colum),
      headers: {
        "Content-Type": "application/json",
      }
    });
    const updatedColum = await res.json()
    setColums(colums.map(col => col.id == id ? updatedColum : col))
  }

  /* <-- FUNCIONES DE TAREAS --> */

  //Función para cargar las tareas de cada columna
  const task = async (id: number, projectID: number) => {
    const res = await fetch(`/api/projects/${projectID}/colums/${id}`)
    const data = await res.json()
  }


  return (
    <GlobalContext.Provider value={{ projects, loadProjects, createProject, colums, loadColums, createColum, updateColum }}>
      {children}
    </GlobalContext.Provider>
  );
};
