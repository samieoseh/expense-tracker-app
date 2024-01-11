import { DashboardStateType } from "../../typings";
import BottomNavigationAction from "./bottom-navigation-action";
import {
  AddFilledIcon,
  AddOutlinedIcon,
  HomeFilledIcon,
  HomeOutlinedIcon,
  StatisticsFilledIcon,
  StatisticsOutlinedIcon,
  UserFilledIcon,
  UserOutlinedIcon,
} from "./icons";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { useState } from "react";
import DashboardAdd from "./dasboard-add";

const LabelBottomNavigation = ({
  value,
  setValue,
}: {
  value: DashboardStateType;
  setValue: React.Dispatch<React.SetStateAction<DashboardStateType>>;
}) => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="fixed bg-background bottom-0 left-0 right-0 w-full h-12  flex outline outline-1 outline-[#f1f1f1] dark:outline-[#1e1e1e]">
      <div className="w-[90%] mx-auto flex items-center justify-between space-x-4 ">
        <BottomNavigationAction
          activeIcon={<HomeFilledIcon />}
          inactiveIcon={<HomeOutlinedIcon />}
          setValue={setValue}
          value={value}
          label="home"
        />
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <div className="bg-transparent">
              {value === "add" ? <AddFilledIcon /> : <AddOutlinedIcon />}
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Add a new transaction</DrawerTitle>
            </DrawerHeader>
            <DashboardAdd />
          </DrawerContent>
        </Drawer>
        <BottomNavigationAction
          activeIcon={<StatisticsFilledIcon />}
          inactiveIcon={<StatisticsOutlinedIcon />}
          setValue={setValue}
          value={value}
          label="statistics"
        />
        <BottomNavigationAction
          activeIcon={<UserFilledIcon />}
          inactiveIcon={<UserOutlinedIcon />}
          setValue={setValue}
          value={value}
          label="profile"
        />
      </div>
    </div>
  );
};

export default LabelBottomNavigation;
