import { useGlobalContext } from "@/hooks/useGlobalContext";
import CreateProjectModal from "../Modal/CreateProjectModal";

const CreateProject = () => {
  const {createProject} = useGlobalContext();

  return (
    <CreateProjectModal />
  );
};

export default CreateProject;


{/* <div className="flex items-center justify-center w-60 h-48 p-4 rounded-lg bg-custom-black hover:bg-custom-second-black/50 border-[1px] border-custom-gray border-dashed cursor-pointer">
      <p className="text-custom-gray text-normal">
        Nuevo proyecto +
      </p>
    </div> */}