import { ChevronLeft, Loader2, LucideEye, LucideEyeOff } from "lucide-react";
import * as z from "zod";
import { changePasswordSchema } from "../../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../form";
import { useState } from "react";
import { Input } from "../input";
import { Button } from "../button";

function ChangePassword({ handleClose }: { handleClose: () => void }) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const [oldPasswordHidden, setOldPasswordHidden] = useState(true);
  const [newPasswordHidden, setNewPasswordHidden] = useState(true);
  const [confirmNewPasswordHidden, setConfirmNewPasswordHidden] =
    useState(true);

  const onSubmit = (formData: z.infer<typeof changePasswordSchema>) => {
    setIsLoading(true);
    console.log(formData);
  };
  return (
    <div className="w-[95%] mx-auto pt-4">
      <div className="h-8 w-8 rounded-full bg-[#2a2a2a] flex items-center justify-center">
        <ChevronLeft onClick={() => handleClose()} />
      </div>
      <div className="pt-8">
        <h1 className="text-xl">Change Password</h1>
        <Form {...form}>
          <form
            className="flex pt-8 flex-col space-y-8"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        className="bg-[#fafafa] border dark:border-none h-14 outline-none text-foreground pl-4 dark:bg-[#2d2d2f]"
                        type={oldPasswordHidden ? "password" : "text"}
                        placeholder="New Password"
                        {...field}
                      />
                      {oldPasswordHidden ? (
                        <LucideEye
                          onClick={() => setOldPasswordHidden(false)}
                          className="absolute cursor-pointer top-[29%] right-3"
                        />
                      ) : (
                        <LucideEyeOff
                          onClick={() => setOldPasswordHidden(true)}
                          className=" absolute cursor-pointer top-[29%] right-3"
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage className="font-bold text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        className="bg-[#fafafa] border dark:border-none h-14 outline-none text-foreground pl-4 dark:bg-[#2d2d2f]"
                        type={newPasswordHidden ? "password" : "text"}
                        placeholder="New Password"
                        {...field}
                      />
                      {newPasswordHidden ? (
                        <LucideEye
                          onClick={() => setNewPasswordHidden(false)}
                          className="absolute cursor-pointer top-[29%] right-3"
                        />
                      ) : (
                        <LucideEyeOff
                          onClick={() => setNewPasswordHidden(true)}
                          className=" absolute cursor-pointer top-[29%] right-3"
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage className="font-bold text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        className="bg-[#fafafa] border dark:border-none h-14 outline-none text-foreground pl-4 dark:bg-[#2d2d2f]"
                        type={confirmNewPasswordHidden ? "password" : "text"}
                        placeholder="Confirm Password"
                        {...field}
                      />
                      {confirmNewPasswordHidden ? (
                        <LucideEye
                          onClick={() => setConfirmNewPasswordHidden(false)}
                          className="absolute cursor-pointer top-[29%] right-3"
                        />
                      ) : (
                        <LucideEyeOff
                          onClick={() => setConfirmNewPasswordHidden(true)}
                          className=" absolute cursor-pointer top-[29%] right-3"
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage className="font-bold text-red-500" />
                </FormItem>
              )}
            />
            <Button
              className={`bg-secondary rounded-md h-14 dark:text-white tracking-widest ${
                isLoading && "opacity-50"
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                  wait...
                </>
              ) : (
                <>Save Changes</>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default ChangePassword;
