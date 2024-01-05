import { ModeToggle } from "../components/ui/mode-toggle";
import DashboardHome from "../components/ui/dashboard-home";
import LabelBottomNavigation from "../components/ui/bottom-navigation";
import { DashboardStateType } from "../typings";
import { useState } from "react";
import DashboardStatistics from "../components/ui/dashboard-statistics";
import DashboardProfile from "../components/ui/dashboard-profile";

const DashboardPage = () => {
  const [value, setValue] = useState<DashboardStateType>("home");
  return (
    <div className="w-[90%] mx-auto pt-4 h-[100vh]">
      <header className="mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="border-none rounded-[100%] flex items-center justify-center w-8 h-8 bg-blue-500">
            <p className="text-sm text-white">S</p>
          </div>
          <p className="text-sm">Welcome, Samuel</p>
        </div>
        <div>
          <ModeToggle />
        </div>
      </header>
      {value === "home" && <DashboardHome />}
      {value === "statistics" && <DashboardStatistics />}
      {value === "profile" && <DashboardProfile />}
      <LabelBottomNavigation value={value} setValue={setValue} />
    </div>
  );
};

export default DashboardPage;
