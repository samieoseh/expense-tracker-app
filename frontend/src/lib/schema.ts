import * as z from "zod";
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&])[A-Za-z\d@#$!%^&*]{8,}$/;

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Email must be at least 2 characters",
    })
    .regex(emailRegex, "Email must be of the format 'test@example.com'"),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters",
    })
    .regex(
      passwordRegex,
      "Password must contain at least 8 characters, an uppercase and a symbol"
    ),
});

export const signupFormSchema = z.object({
  name: z.string().min(4, {
    message: "Name must be at least 4 characters",
  }),
  email: z
    .string()
    .min(10, {
      message: "Email must be at least 10 characters",
    })
    .regex(emailRegex, "Email must be of the format 'test@example.com'"),

  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters",
    })
    .regex(
      passwordRegex,
      "Password must contain at least 8 characters, an uppercase and a symbol"
    ),
});

export const expensesFormSchema = z.object({
  title: z.string().min(4, {
    message: "Title must be at least 4 characters",
  }),
  date: z.date({
    required_error: "A date is required.",
  }),
  category: z.string({
    required_error: "Please select a category to display",
  }),
  amount: z.coerce.number().min(0, {
    message: "Amount must be greater than or equal to 0",
  }),
});
