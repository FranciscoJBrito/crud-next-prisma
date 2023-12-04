"use client";
import { createContext, useState, Dispatch, SetStateAction } from "react";
import { Project, Colum, Task } from "@prisma/client";
import { CreateProject } from "@/interfaces/Project";
import { ColumPlusTasks, CreateColum } from "@/interfaces/Colum";
import { CreateTask } from "@/interfaces/Task";

export const GlobalContext = createContext<{
  projects: Project[];
  loadProjects: () => Promise<void>;
  createProject: (project: CreateProject) => Promise<void>;
  colums: ColumPlusTasks[];
  setColums: Dispatch<SetStateAction<ColumPlusTasks[]>>;
  loadColums: (id: string |number) => Promise<void>;
  createColum: (colum: CreateColum) => Promise<void>;
  updateColum: (id: number, colum: CreateColum) => Promise<void>
  deleteColum: (id: number, projectID: number) => Promise<void>
  tasks: Task[];
  loadTasks: (id: number, projectID: number) => Promise<void>
  createTask: (projectID: number | string, task: CreateTask) => Promise<void>
}>({
  projects: [],
  loadProjects: async () => {},
  createProject: async (project: CreateProject) => {},
  colums: [],
  setColums: () => {},
  loadColums: async (id: string | number) => {},
  createColum: async (colum: CreateColum) => {},
  updateColum: async (id: number, colum: CreateColum) => {},
  deleteColum: async (id: number, projectID: number) => {},
  tasks: [],
  loadTasks: async (id: number, projectID: number) => {},
  createTask: async (projectID: number | string, task: CreateTask) => {}
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

  //Función para eliminar una columna
  const deleteColum = async (id: number, projectID: number) => {
    const res = await fetch(`/api/projects/${projectID}/colums/${id}`, {
      method: 'DELETE'
    })
    const data = await res.json()
    setColums(colums.filter(colum => colum.id != id))
  }

  /* <-- FUNCIONES DE TAREAS --> */

  //Función para cargar las tareas de cada columna
  const loadTasks = async (id: number, projectID: number) => {
    const res = await fetch(`/api/projects/${projectID}/colums/${id}/tasks`)
    const data = await res.json()
    setTasks(data)
  }

  //Función para crear una tarea
  const createTask = async (projectID: number | string ,task: CreateTask) => {
    const res = await fetch(`/api/projects/${projectID}/colums/${task.columID}/tasks`, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newTask = await res.json()
    setTasks([...tasks, newTask])
  }


  return (
    <GlobalContext.Provider value={{ projects, loadProjects, createProject, colums, setColums,loadColums, createColum, updateColum, deleteColum, tasks, loadTasks, createTask }}>
      {children}
    </GlobalContext.Provider>
  );
};
