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
    <div className="w-[80px] h-screen flex flex-col justify-start items-center bg-black/90 py-3 border-r-[1px] border-white/10">
      {navLinks.map(({ key, icon, link }) => (
        <Link
          key={key}
          href={link}
          className={
            pathname === link
              ? " text-black bg-lime-400 transition-all ease-in-out p-4 rounded-[50%] active:bg-lime-400"
              : "text-white hover:bg-lime-400 transition-all ease-in-out p-4 rounded-[50%] hover:text-black"
          }
        >
          {icon}
        </Link>
      ))}
      {/* <Link href="/" className="text-white hover:text-black hover:bg-lime-400 transition-all ease-in-out p-4 rounded-[50%] active:bg-lime-400">
        <HomeIcon className="h-6 w-6" />
      </Link>
      <Link href="/lista" className="text-white hover:text-black hover:bg-lime-400 transition-all ease-in-out p-4 rounded-[50%] my-3">
        <ListBulletIcon className="h-6 w-6" />
      </Link>
      <Link href="#" className="text-white hover:text-black hover:bg-lime-400 transition-all ease-in-out p-4 rounded-[50%]">
        <ChartPieIcon className="h-6 w-6" />
      </Link> */}
    </div>
  );
};

export default Sidebar;
