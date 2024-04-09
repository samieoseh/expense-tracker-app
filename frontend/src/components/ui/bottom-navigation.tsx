import { DashboardStateType } from "../../typings";
import BottomNavigationAction from "./bottom-navigation-action";
import {
  AddFilledIcon,
  AddOutlinedIcon,
  HomeFilledIcon,
  HomeOutlinedIcon,
  StatisticsFilledIcon,
  StatisticsOutlinedIcon,
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
import clsx from "clsx";

const LabelBottomNavigation = ({
  value,
  setValue,
  className,
}: {
  value: DashboardStateType;
  setValue: React.Dispatch<React.SetStateAction<DashboardStateType>>;
  className: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={clsx(
        "fixed bg-background bottom-0 left-0 right-0 w-full h-12  flex outline outline-1 outline-[#f1f1f1] dark:outline-[#1e1e1e]",
        className,
      )}
    >
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
            <DrawerHeader className="text-center">
              <DrawerTitle>New Transaction</DrawerTitle>
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
      </div>
    </div>
  );
};

export default LabelBottomNavigation;
