"use client";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useGlobalContext } from "@/hooks/useGlobalContext";


const CreateProjectModal = () => {
  //Input store value
  let [title, setTitle] = useState("");

  //Handle Modal
  let [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  //Context
  const {createProject} = useGlobalContext();

  return (
    <>
      <div className="">
        <button
          className="w-60 h-48 border-[1px] border-custom-gray border-dashed text-custom-gray rounded-lg hover:bg-custom-gray/10 hover:text-white/20 hover:border-white/20"
          onClick={handleModal}
        >
          Nuevo Proyecto +
        </button>
      </div>

      <Transition appear show={isOpen} as="div">
        {" "}
        <Dialog as="div" className="relative z-10" onClose={handleModal}>
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 backdrop-blur-sm " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as="div"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-custom-black p-6 text-left align-middle shadow-xl transition-all relative border-[1px] border-custom-gray">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white"
                  >
                    Nombre del proyecto
                  </Dialog.Title>
                  <div className="mt-2 w-96">
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        await createProject({
                          title,
                        });
                        handleModal();
                      }}
                    >
                      <input
                        id="title"
                        name="title"
                        type="text"
                        autoFocus={false}
                        className="block w-full flex-1 border-[1px] border-custom-gray rounded-lg bg-transparent py-1.5 px-2 my-2 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:outline-none"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="mt-4 bg-lime-400 py-2 rounded-lg w-full text-custom-gray font-medium cursor-pointer"
                      >
                        Crear proyecto
                      </button>
                    </form>
                  </div>

                  <div className="absolute rounded-[50%] p-2 top-0 right-0">
                    <button type="button" className="" onClick={handleModal}>
                      <XCircleIcon className="w-7 h-7 text-custom-gray" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CreateProjectModal;
