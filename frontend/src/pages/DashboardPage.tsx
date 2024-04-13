import { ModeToggle } from "../components/ui/mode-toggle";
import DashboardHome from "../components/ui/dashboard-home";
import LabelBottomNavigation from "../components/ui/bottom-navigation";
import { DashboardStateType, TransactionType, UserType } from "../typings";
import { useState } from "react";
import DashboardStatistics from "../components/ui/dashboard-statistics";
import { getTransactions, getUser } from "../lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useMediaQuery } from "react-responsive";
import UserIcon from "../components/ui/user-icon";

const DashboardPage = () => {
  const { data: userData } = useQuery<UserType>({
    queryKey: ["user"],
    queryFn: getUser,
  });
  const { data: transactionData } = useQuery<TransactionType>({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });
  const [value, setValue] = useState<DashboardStateType>("home");
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  return (
    <div>
      {userData && transactionData ? (
        <div className="w-[90%] mx-auto pt-4 h-[100vh]">
          <header className="mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <UserIcon
                value={userData.data.firstName.slice(0, 1).toUpperCase()}
              />
              <p className="text-sm">Welcome {userData.data.firstName}</p>
            </div>
            <div>
              <ModeToggle />
            </div>
          </header>
          {!isDesktopOrLaptop && (
            <>
              {value === "home" && (
                <DashboardHome
                  userData={userData}
                  transactionData={transactionData}
                />
              )}
              {value === "statistics" && (
                <DashboardStatistics transactionData={transactionData} />
              )}
            </>
          )}
          {isDesktopOrLaptop && (
            <div className="flex flex-row w-full justify-between gap-32">
              <DashboardHome
                userData={userData}
                transactionData={transactionData}
                className="flex-1"
              />
              <DashboardStatistics transactionData={transactionData} />
            </div>
          )}

          <LabelBottomNavigation
            value={value}
            setValue={setValue}
            className="xl:hidden"
          />
        </div>
      ) : (
        <p className="text-[32px] text-center mt-64">Loading...</p>
      )}
    </div>
  );
};

export default DashboardPage;
