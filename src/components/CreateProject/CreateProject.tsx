import { useGlobalContext } from "@/hooks/useGlobalContext";
import CreateProjectModal from "../Modal/CreateProjectModal";

const CreateProject = () => {
  const {createProject} = useGlobalContext();

  return (
    <CreateProjectModal />
  );
};

export default CreateProject;
