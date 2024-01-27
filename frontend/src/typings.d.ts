export type DashboardStateType = "home" | "add" | "statistics" | "profile";

export type UserType = {
  data: {
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
};

export type TransactionType = {
  data: {
    amount: string;
    date: string;
    id: number;
    incomeType: string;
    title: string;
    userId: number;
    transactionType: string;
  }[];
};

export type CategoryType = {
  data: {
    id: number;
    name: string;
  }[];
};

export type LineChartType = {
  x: string;
  y: number;
};
