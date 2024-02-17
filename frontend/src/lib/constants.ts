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
  { label: "One Time", icon: OneTimeIcon, value: "oneTime" },
  { label: "Recurring", icon: RecurringIcon, value: "recurring" },
];

export const categoryToIcon: Record<string, () => JSX.Element> = {
  internet: InternetIcon,
  health: HealthIcon,
  rent: RentIcon,
  gasoline: GasolineIcon,
  electricity: ElectricityIcon,
  others: OtherIcon,
  recurring: RecurringIcon,
  oneTime: OneTimeIcon,
  grocery: GroceriesIcon,
};
