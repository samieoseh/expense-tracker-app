import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as z from "zod";
import {
  categoryFormSchema,
  loginFormSchema,
  signupFormSchema,
  transactionFormSchema,
} from "./schema";
import axios from "axios";
import { baseUrl } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function signup(formData: z.infer<typeof signupFormSchema>) {
  const names = formData.name.split(" ");
  const firstName = names[0] ?? "";
  const lastName = names[1] ?? "";

  return axios.post(baseUrl + "/auth/signup", {
    firstName: firstName,
    lastName: lastName,
    password: formData.password,
    email: formData.email,
  });
}

export async function getUser() {
  const accessToken = localStorage.getItem("accessToken") ?? "{}";
  const config = {
    headers: {
      Authorization: "Bearer " + JSON.parse(accessToken),
    },
  };
  try {
    const response = await axios.get(baseUrl + "/user", config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTransactions() {
  const accessToken = localStorage.getItem("accessToken") ?? "{}";
  const config = {
    headers: {
      Authorization: "Bearer " + JSON.parse(accessToken),
    },
  };
  try {
    const response = await axios.get(baseUrl + "/user/transactions", config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function addIncome(data: z.infer<typeof transactionFormSchema>) {
  const accessToken = localStorage.getItem("accessToken") ?? "{}";
  const config = {
    headers: {
      Authorization: "Bearer " + JSON.parse(accessToken),
    },
  };
  const response = await axios.post(
    baseUrl + "/income",
    {
      amount: data.value,
      incomeType: data.category,
      title: data.title,
      date: data.date,
    },
    config,
  );
  return response.data;
}

export async function addExpense(data: z.infer<typeof transactionFormSchema>) {
  const accessToken = localStorage.getItem("accessToken") ?? "{}";
  const config = {
    headers: {
      Authorization: "Bearer " + JSON.parse(accessToken),
    },
  };
  console.log(data);
  const response = await axios.post(
    baseUrl + "/expense",
    {
      amount: data.value,
      categoryId: data.category,
      title: data.title,
      date: data.date,
    },
    config,
  );
  return response.data;
}

export async function addCategory(data: z.infer<typeof categoryFormSchema>) {
  const accessToken = localStorage.getItem("accessToken") ?? "{}";
  const config = {
    headers: {
      Authorization: "Bearer " + JSON.parse(accessToken),
    },
  };

  const response = await axios.post(
    baseUrl + "/category",
    {
      name: data.name.slice(0, 1).toUpperCase() + data.name.slice(1),
    },
    config,
  );
  return response.data;
}

export async function getCategories() {
  const accessToken = localStorage.getItem("accessToken") ?? "{}";
  const config = {
    headers: {
      Authorization: "Bearer " + JSON.parse(accessToken),
    },
  };
  const response = await axios.get(baseUrl + "/category", config);
  return response.data;
}
