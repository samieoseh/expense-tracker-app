import { useForm } from "react-hook-form";
import { transactionFormSchema } from "../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";

import { Input } from "./input";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { addIncome, cn } from "../../lib/utils";
import { CalendarIcon, Loader2 } from "lucide-react";
import { Calendar } from "./calendar";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { incomeCategories } from "../../lib/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "./use-toast";

const AddIncomeTransaction = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: addIncome,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onSettled: (error) => {
      if (error !== undefined) {
        toast({
          title: "Transaction added successfully",
          variant: "success",
        });
        form.reset();
      }
    },
  });

  const form = useForm<z.infer<typeof transactionFormSchema>>({
    resolver: zodResolver(transactionFormSchema),
  });

  function onSubmit(data: z.infer<typeof transactionFormSchema>) {
    try {
      mutation.mutate(data);
    } catch (error) {
      toast({
        title: "Transaction failed",
        description: "An error occurred during transaction",
        variant: "destructive",
      });
      console.error(error);
    }
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
                <Input
                  className="bg-[#fafafa] dark:border-none text-foreground pl-4 h-10 dark:bg-[#2d2d2f]"
                  placeholder="Description"
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
                <Input
                  className="bg-[#fafafa] dark:border-none text-foreground pl-4 h-10 dark:bg-[#2d2d2f]"
                  placeholder="Amount"
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {incomeCategories.map((category, id) => {
                      return (
                        <SelectItem value={category.value} key={id}>
                          <div className="flex items-center space-x-4">
                            <div
                              className="p-1 flex items-center justify-center rounded-xl
                             bg-green-500"
                            ></div>
                            <p>{category.label}</p>
                          </div>
                        </SelectItem>
                      );
                    })}
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
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground",
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
        <Button
          className={`w-full rounded-md h-10 ${
            queryClient.isMutating() && "opacity-50"
          }`}
        >
          {queryClient.isMutating() ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...
            </>
          ) : (
            <>Add Transaction</>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default AddIncomeTransaction;
