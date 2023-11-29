"use client";
import { createContext, useState } from "react";
import { Project, Colum, Task } from "@prisma/client";
import { CreateProject } from "@/interfaces/Project";
import { ColumPlusTasks, CreateColum } from "@/interfaces/Colum";

export const GlobalContext = createContext<{
  projects: Project[];
  loadProjects: () => Promise<void>;
  createProject: (project: CreateProject) => Promise<void>;
  colums: ColumPlusTasks[];
  loadColums: (id: string |number) => Promise<void>;
  createColum: (colum: CreateColum) => Promise<void>;
  updateColum: (id: number, colum: CreateColum) => Promise<void>
  tasks: Task[];
  loadTasks: (id: number, projectID: number) => Promise<void>
}>({
  projects: [],
  loadProjects: async () => {},
  createProject: async (project: CreateProject) => {},
  colums: [],
  loadColums: async (id: string | number) => {},
  createColum: async (colum: CreateColum) => {},
  updateColum: async (id: number, colum: CreateColum) => {},
  tasks: [],
  loadTasks: async (id: number, projectID: number) => {},
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [colums, setColums] = useState<ColumPlusTasks[]>([])
  const [tasks, setTasks] = useState<Task[]>([])


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
    const res = await fetch(`/api/projects/${id}/colums`)
    const data = await res.json()
    setColums(data);
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
  const loadTasks = async (id: number, projectID: number) => {
    const res = await fetch(`/api/projects/${projectID}/colums/${id}`)
    const data = await res.json()
    setTasks(data.tasks)
  }


  return (
    <GlobalContext.Provider value={{ projects, loadProjects, createProject, colums, loadColums, createColum, updateColum, tasks, loadTasks }}>
      {children}
    </GlobalContext.Provider>
  );
};
