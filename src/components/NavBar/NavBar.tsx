import Button from "@/components/ui/Button";
import { BellIcon } from "@heroicons/react/20/solid";
import MyModal from "../Modal/Modal";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full h-[60px] bg-custom-black">
      <div className="text-base p-2 w-[250px] border-[1px] border-custom-gray rounded-lg text-custom-gray">search bar</div>
      <div className="flex items-center  w-fit">
        <Button text="Invitar" />
        <div className="ml-3 p-2 bg-custom-gray rounded-lg cursor-pointer hover:bg-white/20">
          <BellIcon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
