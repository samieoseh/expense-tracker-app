import { categoryToIcon, transactions } from "../../lib/constants";
import { UserType } from "../../typings";

const DashboardHome = ({ userData }: { userData: UserType }) => {
  const sortedTransactions = () => {
    const sortedTransactions = [...transactions];

    // Sort the array by date in ascending order
    sortedTransactions.sort(
      (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
    );

    // Pick the first three transactions
    const firstThreeTransactions = sortedTransactions.slice(0, 3);
    return firstThreeTransactions;
  };
  const firstThreeTransactions = sortedTransactions();
  console.log(firstThreeTransactions);

  return (
    <main className="pt-8">
      <div className="flex items-center flex-col space-y-2 md:items-start">
        <h2 className="text-sm">AVAILABLE BALANCE</h2>
        <h1 className="text-2xl md:text-4xl font-bold">${userData.balance}</h1>
      </div>
      <div className="flex justify-between pt-8 space-x-8 md:w-[50%]">
        <div className="flex flex-1 space-x-4 rounded-lg shadow-md py-3 px-4 bg-white dark:bg-[#1c1c1c] items-center">
          <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-[100%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="green"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
              />
            </svg>
          </div>
          <div>
            <p className="text-foreground text-sm">Income</p>
            <p className="text-foreground text-sm">${userData.totalIncome}</p>
          </div>
        </div>
        <div className="flex flex-1 space-x-4 bg-background rounded-lg shadow-md py-3 px-4 bg-white dark:bg-[#1c1c1c] items-center">
          <div className="bg-red-100 w-12 h-12 flex items-center justify-center rounded-[100%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M1.72 5.47a.75.75 0 0 1 1.06 0L9 11.69l3.756-3.756a.75.75 0 0 1 .985-.066 12.698 12.698 0 0 1 4.575 6.832l.308 1.149 2.277-3.943a.75.75 0 1 1 1.299.75l-3.182 5.51a.75.75 0 0 1-1.025.275l-5.511-3.181a.75.75 0 0 1 .75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 0 0-3.528-5.617l-3.809 3.81a.75.75 0 0 1-1.06 0L1.72 6.53a.75.75 0 0 1 0-1.061Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="text-foreground text-sm">Expenses</p>
            <h3 className="text-foreground text-sm">
              -${userData.totalExpenses}
            </h3>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <h2 className="text-sm font-bold">Recent Transactions</h2>
        <div className="flex flex-col space-y-3 pt-4 md:w-[50%]">
          {firstThreeTransactions.map((transaction, id) => {
            const category = transaction.category;
            const Svg = categoryToIcon[category];

            return (
              <div
                className="rounded-xl flex bg-white dark:bg-[#1c1c1c] shadow-md justify-between items-center h-12 px-4 py-10"
                key={id}
              >
                <div className="flex space-x-4 items-center">
                  <div className="p-3 flex items-center justify-center rounded-xl bg-[#eeeded] dark:bg-[#262424]">
                    <Svg />
                  </div>
                  <div>
                    <p className="text-sm">
                      {transaction.title.length > 20
                        ? transaction.title.slice(0, 15) + "..."
                        : transaction.title}
                    </p>
                    <small className="text-muted-foreground text-xs">
                      1st Jan, 2024
                    </small>
                  </div>
                </div>
                <p
                  className={`text-sm font-bold ${
                    transaction.type === "expenses"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  ${transaction.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default DashboardHome;
