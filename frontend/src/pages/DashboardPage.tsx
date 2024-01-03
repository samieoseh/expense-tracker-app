import { ModeToggle } from "../components/ui/mode-toggle";
import DashboardHome from "../components/ui/dashboard-home";
import { DashboardStateType } from "../typings";
import { useState } from "react";

const DashboardPage = () => {
  const [dashboardState, setDashboardState] =
    useState<DashboardStateType>("home");
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
      <DashboardHome />
      <div className="absolute bottom-0 left-0 right-0 w-full h-12  flex border-t">
        <div className="w-[90%] mx-auto flex items-center justify-center space-x-4">
          <div
            className={`${
              dashboardState === "home" && "border-t border-foreground"
            } px-6 h-12 flex items-center justify-center`}
            onClick={() => setDashboardState("home")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`h-8 w-8 ${
                dashboardState === "home"
                  ? "fill-[#1c1c1c] dark:fill-white"
                  : "fill-[#3b3b3b] dark:fill-[#cecece]"
              }`}
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
          </div>
          <div
            className={`${
              dashboardState === "add" && "border-t border-foreground"
            } px-6 h-12 flex items-center justify-center`}
            onClick={() => setDashboardState("add")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`h-8 w-8 ${
                dashboardState === "add"
                  ? "fill-[#1c1c1c] dark:fill-white"
                  : "fill-[#3b3b3b] dark:fill-[#cecece]"
              }`}
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
            className={`${
              dashboardState === "statistics" && "border-t border-foreground"
            } px-6 h-12 flex items-center justify-center`}
            onClick={() => setDashboardState("statistics")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`h-8 w-8 ${
                dashboardState === "statistics"
                  ? "fill-[#1c1c1c] dark:fill-white"
                  : "fill-[#3b3b3b] dark:fill-[#cecece]"
              }`}
            >
              <path
                fill-rule="evenodd"
                d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
            className={`${
              dashboardState === "profile" && "border-t border-foreground"
            } px-6 h-12 flex items-center justify-center`}
            onClick={() => setDashboardState("profile")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`h-8 w-8 ${
                dashboardState === "profile"
                  ? "fill-[#1c1c1c] dark:fill-white"
                  : "fill-[#3b3b3b] dark:fill-[#cecece]"
              }`}
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
