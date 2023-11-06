"use client";
import Link from "next/link";
import {
  HomeIcon,
  ListBulletIcon,
  ChartPieIcon,
} from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      key: 1,
      icon: <HomeIcon className="h-6 w-6" />,
      link: "/",
    },
    {
      key: 2,
      icon: <ListBulletIcon className="h-6 w-6" />,
      link: "/list",
    },
    {
      key: 3,
      icon: <ChartPieIcon className="h-6 w-6" />,
      link: "/report",
    },
  ];

  return (
    <div className="w-[90px] h-screen flex justify-end items-center py-3 px-2">
      <div className="w-[80px] h-full flex flex-col justify-start items-center bg-black/90 py-4 border-r-[1px] border-white/10 rounded-2xl">
        {navLinks.map(({ key, icon, link }) => (
          <Link
            key={key}
            href={link}
            className={
              pathname === link
                ? " text-black bg-lime-400 transition-all ease-in-out p-3 rounded-[50%] active:bg-lime-400 mb-3"
                : "text-white hover:bg-lime-400 transition-all ease-in-out p-3 rounded-[50%] hover:text-black mb-3"
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
