import {
  ElectricityIcon,
  GasolineIcon,
  GroceriesIcon,
  HealthIcon,
  InternetIcon,
  OneTimeIcon,
  OtherIcon,
  RecurringIcon,
  RentIcon,
} from "../components/ui/icons";
import { TransactionType } from "../typings";

export const baseUrl = "https://expense-tracker-q1az.onrender.com";

export const expensesCategories = [
  { label: "Rent", icon: "rent-icon.png" },
  { label: "Gasoline", icon: "gasoline-icon.png" },
  { label: "Grocery", icon: "gasoline-icon.png" },
  { label: "Internet", icon: "internet-icon.png" },
  { label: "Health", icon: "health-icon.png" },
  { label: "Electricity", icon: "bulb-icon.png" },
];
export const incomeCategories = [
  { label: "One Time", icon: OneTimeIcon },
  { label: "Recurring", icon: RecurringIcon },
];

export const categoryToIcon: Record<string, () => JSX.Element> = {
  internet: InternetIcon,
  health: HealthIcon,
  rent: RentIcon,
  gasoline: GasolineIcon,
  electricity: ElectricityIcon,
  others: OtherIcon,
  recurring: RecurringIcon,
  one: OneTimeIcon,
  grocery: GroceriesIcon,
};

export const transactions: TransactionType[] = [
  {
    title: "Recieved Salary",
    value: 5000,
    type: "income",
    category: "recurring",
    date: new Date("2023-07-20"),
  },
  {
    title: "Bought Groceries",
    value: 150.78,
    type: "expenses",
    category: "grocery",
    date: new Date("2023-07-23"),
  },
  {
    title: "Bought Gasoline",
    value: 5.09,
    type: "expenses",
    category: "gasoline",
    date: new Date("2023-07-22"),
  },
];
