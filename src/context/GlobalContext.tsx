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
}>({
  projects: [],
  loadProjects: async () => {},
  createProject: async (project: CreateProject) => {},
  colums: [],
  loadColums: async (id: string | number) => {},
  createColum: async (colum: CreateColum) => {},
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [colums, setColums] = useState<Colum[]>([])


//FUNCIONES DE PROYECTOS 

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


  //FUNCIONES DE COLUMNAS

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
      body: JSON.stringify(colum.title),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newColum = await res.json()
    setColums([...colums, newColum])
  }



  return (
    <GlobalContext.Provider value={{ projects, loadProjects, createProject, colums, loadColums, createColum }}>
      {children}
    </GlobalContext.Provider>
  );
};
