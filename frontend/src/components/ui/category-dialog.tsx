import { Input } from "./input";
import * as z from "zod";
import { categoryFormSchema } from "../../lib/schema";
import { Button } from "./button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "./use-toast";
import { addCategory } from "../../lib/utils";
import { useState } from "react";

const CategoryDialog = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [name, setName] = useState("");

  const mutation = useMutation({
    mutationFn: addCategory,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
    onSettled: (error) => {
      if (error !== undefined) {
        console.log("no errors");
        toast({
          title: "Category added successfully",
          variant: "success",
        });
      }
    },
  });

  const onSubmit = (data: z.infer<typeof categoryFormSchema>) => {
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
  };
  return (
    <div className="flex flex-col gap-4">
      <Input
        className="bg-[#fafafa] dark:border-none text-foreground pl-4 h-10 dark:bg-[#2d2d2f] w-full"
        placeholder="Name of category"
        defaultValue={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p></p>
      <Button onClick={() => onSubmit({ name: name })} className="w-full">
        Add Category
      </Button>
    </div>
  );
};

export default CategoryDialog;
