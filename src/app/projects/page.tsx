import NavBar from "@/components/NavBar/NavBar";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div>
      <NavBar />
      <h2>Proyectos</h2>
      <div className="w-full flex">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
