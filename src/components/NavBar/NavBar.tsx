import Button from "@/components/ui/Button";
import MyModal from "../Modal/Modal";
import NotificationSidebar from "../NotificationSidebar/NotificationSidebar";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full h-[60px]">
      <div className="text-base p-2 w-[250px] border-[1px] border-custom-gray rounded-lg text-custom-gray">search bar</div>
      <div className="flex items-center  w-fit">
        <Button text="Invitar" />
          <NotificationSidebar />
      </div>
    </div>
  );
};

export default NavBar;
