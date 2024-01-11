import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as z from "zod";
import { signupFormSchema } from "./schema";
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
  console.log("accessToken", localStorage.getItem("accessToken"));
  const config = {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("accessToken") ?? ""),
    },
  };
  console.log(config);
  try {
    const response = await axios.get(baseUrl + "/user", config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
