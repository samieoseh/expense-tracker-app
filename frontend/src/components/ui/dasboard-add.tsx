import { useState } from "react";
import { Button } from "./button";

import AddIncomeTransaction from "./add-income-transaction";
import AddExpensesTransaction from "./add-expenses-transaction";
import { LucideArrowDownLeft, LucideArrowUpRight } from "lucide-react";

const DashboardAdd = () => {
  const [value, setValue] = useState("income");
  return (
    <main className="w-full px-4 mx-auto">
      <div className="p-[.15rem] rounded-md flex justify-center space-x-2 items-center bg-[#f3f2f2] dark:bg-[#272727]">
        <Button
          className={`rounded-md w-28 flex-1 ${
            value === "income"
              ? "bg-background border dark:bg-[#1c1c1c]"
              : "bg-[#f0f0f0] dark:bg-[#272727]"
          }`}
          size="sm"
          onClick={() => setValue("income")}
        >
          <h2 className="text-foreground flex items-center gap-2">
            <LucideArrowUpRight
              stroke={`${value === "income" ? "green" : "gray"}`}
            />
            Income
          </h2>
        </Button>
        <Button
          className={`rounded-md w-28 flex-1 ${
            value === "expenses"
              ? "bg-background border dark:bg-[#1c1c1c]"
              : "bg-[#f3f2f2] dark:bg-[#272727]"
          }`}
          size="sm"
          onClick={() => setValue("expenses")}
        >
          <h2 className="text-foreground flex items-center gap-2">
            <LucideArrowDownLeft
              stroke={`${value === "expenses" ? "red" : "gray"}`}
            />
            Expenses
          </h2>
        </Button>
      </div>
      {value === "income" && <AddIncomeTransaction />}
      {value === "expenses" && <AddExpensesTransaction />}
    </main>
  );
};

export default DashboardAdd;
