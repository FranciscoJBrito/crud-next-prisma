"use client";
import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import Form from "../ui/Form";
import { PlusIcon } from "@heroicons/react/20/solid";

export default function MyModal(props: { title: string }) {
  //Handle Modal
  let [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="absolute bottom-4 right-4">
        <PlusIcon
          className="h-14 w-14 text-black bg-lime-400 p-2 rounded-[50%]"
          onClick={handleModal}
        />
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
            <div className="fixed inset-0 bg-black/25" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {props.title}
                  </Dialog.Title>
                  <div className="mt-2 w-96">
                    <Form handleModal={handleModal}/>
                  </div>

                  <div className="absolute rounded-[50%] p-2 top-0 right-0">
                    <button type="button" className="" onClick={handleModal}>
                      <XCircleIcon className="w-7 h-7 text-black/50" />
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
}
