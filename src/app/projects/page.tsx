'use client'
import CreateProject from "@/components/CreateProject/CreateProject";
import NavBar from "@/components/NavBar/NavBar";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import UpgradeCard from "@/components/UpgradeCard/UpgradeCard";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { useEffect } from "react";

const Projects = () => {
  const {projects, loadProjects} = useGlobalContext()
  useEffect(() => {
    loadProjects();
  }, [])

  return (
    <div>
      <NavBar />
      <h2>Proyectos</h2>
      <div className="w-full grid lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7  gap-4">
        <UpgradeCard />
        {
          projects.map(project => (
            <ProjectCard key={project.id} id={project.id} title={project.title}/>
          ))
        }
        <CreateProject />
      </div>
    </div>
  );
};

export default Projects;
