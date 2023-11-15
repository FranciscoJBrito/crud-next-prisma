import React from "react";

const ProjectCreateForm = () => {
  return (
    <form>
      <label
        htmlFor="title"
        className="block w-full text-sm font-medium leading-6 text-white"
      >
        Nombre del proyecto
      </label>
      <input
        id="title"
        name="title"
        type="text"
        className="block w-full flex-1 border-[1px] border-custom-gray rounded-lg bg-transparent py-1.5 px-2 my-2 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
      />
    </form>
  );
};

export default ProjectCreateForm;
