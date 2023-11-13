import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

interface Props {
  className: string;
  aria_hidden: string;
}

const TasksDropDown = () => {
  return (
    <div className="absolute top-4 right-2 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <EllipsisVerticalIcon
              className="h-6 w-6 text-white/60 hover:border-[1px] border-custom-gray hover:rounded-[50%] hover:bg-white/10"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-custom-gray rounded-md bg-custom-black shadow-lg ring-1 ring-black/5 focus:outline-none z-50 border-[1px] border-custom-gray">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-lime-400 text-gray-900" : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria_hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria_hidden="true"
                      />
                    )}
                    Editar
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-lime-400 text-gray-900" : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DuplicateActiveIcon
                        className="mr-2 h-5 w-5"
                        aria_hidden="true"
                      />
                    ) : (
                      <DuplicateInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria_hidden="true"
                      />
                    )}
                    Duplicar
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-lime-400 text-gray-900" : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ArchiveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria_hidden="true"
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria_hidden="true"
                      />
                    )}
                    Archivar
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-lime-400 text-gray-900" : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <MoveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria_hidden="true"
                      />
                    ) : (
                      <MoveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria_hidden="true"
                      />
                    )}
                    Mover
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-red-600 text-white" : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={async () => {
                      console.log();
                      /* if (
                        confirm("Estas seguro de que deseas eliminar la nota?")
                      ) {
                        await deleteNote(id);
                      } else {
                        null;
                      } */
                    }}
                  >
                    {active ? (
                      <DeleteActiveIcon
                        className="mr-2 h-5 w-5"
                        aria_hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria_hidden="true"
                      />
                    )}
                    Eliminar
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

function EditInactiveIcon(props: Props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#ECFCCB"
        stroke="#A3E635"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props: Props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#A3E635"
        stroke="#ECFCCB"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props: Props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#ECFCCB"
        stroke="#A3E635"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#ECFCCB"
        stroke="#A3E635"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(props: Props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#A3E635"
        stroke="#ECFCCB"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#A3E635"
        stroke="#ECFCCB"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props: Props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#ECFCCB"
        stroke="#A3E635"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#ECFCCB"
        stroke="#A3E635"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A3E635" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props: Props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#A3E635"
        stroke="#ECFCCB"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#A3E635"
        stroke="#ECFCCB"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#ECFCCB" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props: Props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A3E635" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A3E635" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A3E635" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props: Props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#ECFCCB" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#ECFCCB" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#ECFCCB" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props: Props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#ECFCCB"
        stroke="#A3E635"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A3E635" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A3E635" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props: Props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#DC2626"
        stroke="#F8A5A5"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#F8A5A5" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#F8A5A5" strokeWidth="2" />
    </svg>
  );
}

export default TasksDropDown;
