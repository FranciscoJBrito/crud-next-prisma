import CreateProject from "@/components/CreateProject/CreateProject";
import NavBar from "@/components/NavBar/NavBar";
import UpgradeCard from "@/components/UpgradeCard/UpgradeCard";

const Projects = () => {
  return (
    <div>
      <NavBar />
      <h2>Proyectos</h2>
      <div className="w-full flex">
        <UpgradeCard />
        <CreateProject />
      </div>
    </div>
  );
};

export default Projects;
