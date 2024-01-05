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
          <h2 className="text-foreground">Income</h2>
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
          <h2 className="text-foreground">Expenses</h2>
        </Button>
      </div>
      {value === "income" && <AddIncomeTransaction />}
      {value === "expenses" && <AddExpensesTransaction />}
    </main>
  );
};

export default DashboardAdd;
