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
      <div className="w-full flex">
        <UpgradeCard />
        {
          projects.map(project => (
            <ProjectCard key={project.id} title={project.title}/>
          ))
        }
        <CreateProject />
      </div>
    </div>
  );
};

export default Projects;
