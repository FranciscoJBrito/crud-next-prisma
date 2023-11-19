"use client";
import Link from "next/link";
import Image from "next/image";
import {
  HomeIcon,
  FolderIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const projectsDynamicRoute = /projects/
  const validateDynamicRoute = projectsDynamicRoute.test(pathname)

  const navLinks = [
    {
      key: 1,
      icon: <HomeIcon className="h-6 w-6" />,
      link: "/",
    },
    {
      key: 2,
      icon: <FolderIcon className="h-6 w-6" />,
      link: "/projects",
    },
    {
      key: 3,
      icon: <PresentationChartLineIcon className="h-6 w-6" />,
      link: "/report",
    },
  ];

  return (
    <div className="w-[80px] h-screen flex justify-end items-center pb-3 bg-custom-black border-r-[1px] border-white/10">
      <div className="w-full h-full flex flex-col justify-start items-center pb-4">
        <div className="flex justify-center items-center w-full h-[75px] bg-custom-deep-black mb-4 border-b-[1px] border-custom-gray hover:shadow-custom-inner hover:shadow-lime-400 transition-all ">
        <Image src="/limetasklogo.png" width={25} height={25} alt="Logo limetask"/>
        </div>
        {navLinks.map(({ key, icon, link }) => ( 
          <Link
            key={key}
            href={link}
            className={
              pathname === link || link == "/projects" && validateDynamicRoute
                ? " text-custom-black rounded-lg bg-lime-400 transition-all ease-in-out p-2  mb-3"
                : "text-white hover:bg-lime-400 transition-all ease-in-out p-2 rounded-lg hover:text-custom-black mb-3"
            }
          >
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
