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
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { Calendar } from "./calendar";
import { addExpense, cn, getCategories } from "../../lib/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "./use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import CategoryDialog from "./category-dialog";
import { CategoryType } from "../../typings";

const AddExpensesTransaction = () => {
  const form = useForm<z.infer<typeof transactionFormSchema>>({
    resolver: zodResolver(transactionFormSchema),
  });

  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: addExpense,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onSettled: (error) => {
      if (error !== undefined) {
        console.log("no errors");
        toast({
          title: "Transaction added successfully",
          variant: "success",
        });
      }
    },
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

  const { data } = useQuery<CategoryType>({
    queryKey: ["category"],
    queryFn: getCategories,
  });

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
                <Dialog>
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
                      <DialogTrigger>
                        <Button
                          variant="ghost"
                          className="w-full flex justify-start"
                        >
                          Add a new category
                        </Button>
                      </DialogTrigger>
                      {data?.data.map((category, id) => (
                        <SelectItem key={id} value={category.id.toString()}>
                          <div className="flex items-center space-x-4">
                            <div
                              className="p-1 flex items-center justify-center rounded-xl
                             bg-red-500"
                            ></div>
                            <p>{category.name}</p>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add a new category</DialogTitle>
                    </DialogHeader>

                    <CategoryDialog />
                  </DialogContent>
                </Dialog>
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

export default AddExpensesTransaction;
