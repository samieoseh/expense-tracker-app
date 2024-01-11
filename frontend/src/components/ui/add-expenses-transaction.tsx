import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { transactionFormSchema } from "../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./input";
import { Label } from "./label";
import { expensesCategories, transactions } from "../../lib/constants";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./calendar";
import { cn } from "../../lib/utils";

const AddExpensesTransaction = () => {
  const form = useForm<z.infer<typeof transactionFormSchema>>({
    resolver: zodResolver(transactionFormSchema),
  });

  function onSubmit(data: z.infer<typeof transactionFormSchema>) {
    transactions.push({
      title: data.title,
      date: data.date,
      category: data.category,
      value: data.value,
      type: "expenses",
    });
  }

  return (
    <Form {...form}>
      <form
        className="py-4 flex flex-col space-y-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Label className="font-bold">Title</Label>
              </FormControl>
              <FormControl>
                <Input
                  className="bg-[#fafafa] dark:border-none text-foreground pl-4 h-10 dark:bg-[#2d2d2f]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-bold text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Label className="font-bold">Amount</Label>
              </FormControl>
              <FormControl>
                <Input
                  className="bg-[#fafafa] dark:border-none text-foreground pl-4 h-10 dark:bg-[#2d2d2f]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-bold text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Label className="font-bold">Category</Label>
              </FormControl>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {expensesCategories.map((category, id) => (
                      <SelectItem value={category.label} key={id}>
                        <div className="flex items-center space-x-4">
                          <img
                            src={`/src/assets/${category.icon}`}
                            alt={category.label}
                            className="h-4 w-4"
                          />
                          <p>{category.label}</p>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="font-bold text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Label className="font-bold">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <FormMessage className="font-bold text-red-500" />
            </FormItem>
          )}
        />
        <Button>Add Transaction</Button>
      </form>
    </Form>
  );
};

export default AddExpensesTransaction;
