import { LucideArrowDownLeft, LucideArrowUpRight } from "lucide-react";

const DashboardHome = () => {
  return (
    <main className="pt-8">
      <div className="flex items-center flex-col space-y-2 md:items-start">
        <h2 className="text-sm">AVAILABLE BALANCE</h2>
        <h1 className="text-2xl md:text-4xl font-bold">$12,000</h1>
      </div>
      <div className="flex justify-between pt-8 space-x-8 md:w-[50%]">
        <div className="flex flex-1 space-x-4 rounded-lg shadow-md py-3 px-4 bg-white dark:bg-[#1c1c1c] items-center">
          <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-[100%]">
            <LucideArrowUpRight fill="green" stroke="green" />
          </div>
          <div>
            <p className="text-foreground text-sm">Income</p>
            <p className="text-foreground text-sm">$8,000</p>
          </div>
        </div>
        <div className="flex flex-1 space-x-4 bg-background rounded-lg shadow-md py-3 px-4 bg-white dark:bg-[#1c1c1c] items-center">
          <div className="bg-red-100 w-12 h-12 flex items-center justify-center rounded-[100%]">
            <LucideArrowDownLeft fill="red" stroke="red" />
          </div>
          <div>
            <p className="text-foreground text-sm">Expenses</p>
            <h3 className="text-foreground text-sm">-$2,000</h3>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <h2 className="text-sm font-bold">Recent Transactions</h2>
        <div className="flex flex-col space-y-4 pt-4 md:w-[50%]">
          <div className="rounded-xl flex bg-white dark:bg-[#1c1c1c] shadow-md justify-between items-center h-12 px-4 py-10">
            <div className="flex space-x-4 items-center">
              <div className="p-3 flex items-center justify-center rounded-xl bg-[#eeeded] dark:bg-[#262424]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 fill-dark dark:fill-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm">Dentist Fee</p>
                <small className="text-muted-foreground text-xs">
                  1st Jan, 2024
                </small>
              </div>
            </div>
            <p className="text-sm font-bold">-$200.67</p>
          </div>
          <div className="rounded-xl flex bg-white dark:bg-[#1c1c1c] shadow-md justify-between items-center h-12 px-4 py-10">
            <div className="flex space-x-4 items-center">
              <div className="p-3 flex items-center justify-center rounded-xl bg-[#eeeded] dark:bg-[#262424]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 fill-dark dark:fill-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm">Electricity Bill</p>
                <small className="text-muted-foreground text-xs">
                  1st Jan, 2024
                </small>
              </div>
            </div>
            <p className="text-sm font-bold">-$100.00</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardHome;
