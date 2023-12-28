import { LucideArrowDownLeft, LucideArrowUpRight } from "lucide-react";
import { ModeToggle } from "../components/ui/mode-toggle";

const DashboardPage = () => {
  return (
    <div className="w-[90%] mx-auto pt-4">
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
      <main className="pt-8">
        <div className="flex items-center flex-col space-y-2">
          <h2 className="text-sm">AVAILABLE BALANCE</h2>
          <h1 className="text-2xl">$12,000</h1>
        </div>
        <div className="flex justify-between pt-8 space-x-8">
          <div className="border flex flex-1 space-x-4 bg-background rounded-lg shadow-md py-2 px-4 border-green-200 items-center">
            <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-[100%]">
              <LucideArrowUpRight fill="green" stroke="green" />
            </div>
            <div>
              <p className="text-foreground text-sm">Income</p>
              <p className="text-foreground text-sm">$8,000</p>
            </div>
          </div>
          <div className="border flex flex-1 space-x-4 bg-background rounded-lg shadow-md py-2 px-4 border-red-200 items-center">
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
          <h2 className="text-sm">Recent Transactions</h2>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
