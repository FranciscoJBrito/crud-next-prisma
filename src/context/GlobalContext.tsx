"use client";
import { createContext, useState } from "react";
import { Project, Colum } from "@prisma/client";
import { CreateProject } from "@/interfaces/Project";

export const GlobalContext = createContext<{
  projects: Project[];
  loadProjects: () => Promise<void>;
  createProject: (project: CreateProject) => Promise<void>;
  colums: Colum[];
  loadColums: (id: string |number) => Promise<void>
}>({
  projects: [],
  loadProjects: async () => {},
  createProject: async (project: CreateProject) => {},
  colums: [],
  loadColums: async (id: string | number) => {},
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
  const loadColums = async (id: number | string) => {
    const res = await fetch(`/api/projects/${id}`)
    const data = await res.json()
    setProjects(data);
  }

  return (
    <GlobalContext.Provider value={{ projects, loadProjects, createProject, colums, loadColums }}>
      {children}
    </GlobalContext.Provider>
  );
};
