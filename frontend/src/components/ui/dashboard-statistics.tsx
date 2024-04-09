import { TransactionType } from "../../typings";
import LineChart from "./line-chart";
import clsx from "clsx";

const DashboardStatistics = ({
  className,
  transactionData,
}: {
  transactionData: TransactionType;
  className?: string;
}) => {
  console.log("transactionData", transactionData);
  const incomeTransactions =
    transactionData?.data?.filter(
      (transaction) => transaction.transactionType === "income",
    ) || [];
  incomeTransactions.sort(
    (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf(),
  );
  const incomeDates = incomeTransactions.map((transaction) => transaction.date);
  const incomeAmounts = incomeTransactions.map((transaction) =>
    parseFloat(transaction.amount.replace("$", "").replace(/,/g, "")),
  );

  const cumulativeIncomeAmounts = incomeAmounts.map(
    (
      (sum) => (value) =>
        (sum += value)
    )(0),
  );

  const expenseTransactions =
    transactionData?.data?.filter(
      (transaction) => transaction.transactionType === "expense",
    ) || [];
  expenseTransactions.sort(
    (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf(),
  );
  const expenseDates = expenseTransactions.map(
    (transaction) => transaction.date,
  );
  const expenseAmounts = expenseTransactions.map((transaction) =>
    parseFloat(transaction.amount.replace("$", "").replace(/,/g, "")),
  );
  const cumulativeExpenseAmounts = expenseAmounts.map(
    (
      (sum) => (value) =>
        (sum += value)
    )(0),
  );

  console.log("cumulativeExpenseAmounts: ", cumulativeExpenseAmounts);
  return (
    <div className={clsx("pt-8 h-64", className)}>
      {transactionData && (
        <div className="flex flex-col space-y-8 flex-1">
          <div>
            <p className="pb-4 font-bold">Income History</p>
            <LineChart
              id="1"
              labels={incomeDates}
              amounts={cumulativeIncomeAmounts}
              colors={{ dark: "rgb(0, 173, 181)", light: "rgb(0, 123, 255)" }}
            />
          </div>
          <div>
            <p className="pb-4 font-bold">Expense History</p>
            <LineChart
              id="2"
              labels={expenseDates}
              amounts={cumulativeExpenseAmounts}
              colors={{ dark: "rgb(220, 53, 69)", light: "rgb(255, 102, 102)" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardStatistics;
