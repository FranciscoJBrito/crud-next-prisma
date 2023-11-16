"use client";
import { createContext, useState } from "react";
import { Project } from "@prisma/client";
import { CreateProject } from "@/interfaces/Project";

export const GlobalContext = createContext<{
  projects: Project[];
  loadProjects: () => Promise<void>;
  createProject: (project: CreateProject) => Promise<void>
}>({
  projects: [],
  loadProjects: async () => {},
  createProject: async (project: CreateProject) => {}
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>([]);

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

  return (
    <GlobalContext.Provider value={{ projects, loadProjects, createProject }}>
      {children}
    </GlobalContext.Provider>
  );
};
