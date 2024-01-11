import { useState } from "react";
import { Button } from "./button";

import AddIncomeTransaction from "./add-income-transaction";
import AddExpensesTransaction from "./add-expenses-transaction";

const DashboardAdd = () => {
  const [value, setValue] = useState("income");
  return (
    <main className="w-full px-4 mx-auto">
      <div className="pt-4 flex justify-center space-x-8 items-center">
        <Button
          className={`rounded-full w-28 ${
            value === "income"
              ? "bg-[#d5d5d5] dark:bg-[#2f2f2f]"
              : "bg-[#f0f0f0] dark:bg-[#1c1c1c]"
          }`}
          size="sm"
          onClick={() => setValue("income")}
        >
          <h2 className="text-foreground flex items-center gap-2">
            Income
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </h2>
        </Button>
        <Button
          className={`rounded-full w-28 ${
            value === "expenses"
              ? "bg-[#d5d5d5] dark:bg-[#2f2f2f]"
              : "bg-[#f0f0f0] dark:bg-[#1c1c1c]"
          }`}
          size="sm"
          onClick={() => setValue("expenses")}
        >
          <h2 className="text-foreground flex items-center gap-2">
            Expenses
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </h2>
        </Button>
      </div>
      {value === "income" && <AddIncomeTransaction />}
      {value === "expenses" && <AddExpensesTransaction />}
    </main>
  );
};

export default DashboardAdd;
