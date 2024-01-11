export type DashboardStateType = "home" | "add" | "statistics" | "profile";

export type TransactionType = {
  title: string;
  date: Date;
  type: string;
  value: number;
  category: string;
};

export type UserType = {
  balance: number;
  createdDate: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  phoneNumber: string | null;
  totalExpenses: number;
  totalIncome: number;
  updatedDate: string;
};
