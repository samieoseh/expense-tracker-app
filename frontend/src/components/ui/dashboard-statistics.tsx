import { useQuery } from "@tanstack/react-query";
import { TransactionType } from "../../typings";
import LineChart from "./line-chart";
import { getTransactions } from "../../lib/utils";

const DashboardStatistics = () => {
  const { data } = useQuery<TransactionType>({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });
  const incomeTransactions =
    data?.data?.filter(
      (transaction) => transaction.transactionType === "income"
    ) || [];
  incomeTransactions.sort(
    (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
  );
  const incomeDates = incomeTransactions.map((transaction) => transaction.date);
  const incomeAmounts = incomeTransactions.map((transaction) =>
    parseFloat(transaction.amount.replace("$", "").replace(/,/g, ""))
  );

  const expenseTransactions =
    data?.data?.filter(
      (transaction) => transaction.transactionType === "expense"
    ) || [];
  expenseTransactions.sort(
    (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
  );
  const expenseDates = expenseTransactions.map(
    (transaction) => transaction.date
  );
  const expenseAmounts = expenseTransactions.map((transaction) =>
    parseFloat(transaction.amount.replace("$", "").replace(/,/g, ""))
  );

  return (
    <div className="pt-8 h-64">
      {data && (
        <div className="flex flex-col space-y-8">
          <div>
            <p className="pb-4 font-bold">Income History</p>
            <LineChart
              id="1"
              labels={incomeDates}
              amounts={incomeAmounts}
              colors={{ dark: "rgb(0, 173, 181)", light: "rgb(0, 123, 255)" }}
            />
          </div>
          <div>
            <p className="pb-4 font-bold">Expense History</p>
            <LineChart
              id="2"
              labels={expenseDates}
              amounts={expenseAmounts}
              colors={{ dark: "rgb(220, 53, 69)", light: "rgb(255, 102, 102)" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardStatistics;
