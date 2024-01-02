import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupFormSchema } from "../../lib/schema";
import { LucideEye, LucideEyeOff } from "lucide-react";
import { useState } from "react";
import GoogleLogo from "../../assets/google-light.svg";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../components/ui/form";

const SignupPage = () => {
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [passwordHidden, setPasswordHidden] = useState(true);

  const onSubmit = (formData: z.infer<typeof signupFormSchema>) => {
    console.log("submitted: ", formData);
  };
  return (
    <div className="w-[90%] mx-auto flex flex-col">
      <div className="pt-4">
        <div className="flex flex-col space-y-4">
          <h1 className="text-foreground font-bold text-[1.5rem]">
            CREATE ACCOUNT
          </h1>
        </div>
        <Form {...form}>
          <form
            className="flex pt-8 flex-col space-y-8"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-[#fafafa] border-none h-14 text-foreground pl-4 dark:bg-[#2d2d2f]"
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-bold text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-[#fafafa] border-none h-14 text-foreground pl-4 dark:bg-[#2d2d2f]"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-bold text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        className="bg-[#fafafa] border-none h-14 outline-none text-foreground pl-4 dark:bg-[#2d2d2f]"
                        type={passwordHidden ? "password" : "text"}
                        placeholder="Password"
                        {...field}
                      />
                      {passwordHidden ? (
                        <LucideEye
                          onClick={() => setPasswordHidden(false)}
                          className="absolute cursor-pointer top-[29%] right-3"
                        />
                      ) : (
                        <LucideEyeOff
                          onClick={() => setPasswordHidden(true)}
                          className=" absolute cursor-pointer top-[29%] right-3"
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage className="font-bold text-red-500" />
                </FormItem>
              )}
            />

            <Button className="bg-secondary w-full rounded-md h-14 dark:text-white tracking-widest">
              SIGN UP
            </Button>
          </form>
        </Form>
        <p className="text-muted-foreground text-center pt-4 text-sm">
          Already have an account{", "}
          <Link to="/auth/login" className="text-foreground underline">
            Sign in now
          </Link>
        </p>
      </div>
      <div className="w-full space-x-4 flex items-center justify-center pt-8">
        <span className="h-[0.01rem] rounded flex-1 bg-muted-foreground"></span>
        <p className="text-sm">OR</p>
        <span className="h-[0.01rem] rounded flex-1 bg-muted-foreground"></span>
      </div>
      <div className="pt-8">
        <Button className="bg-transparent border border-muted-foreground w-full text-dark text-sm flex gap-2 h-14">
          <img src={GoogleLogo} alt="Google Logo" className="h-6 w-6" />
          Continue with Google
        </Button>
      </div>
    </div>
  );
};

export default SignupPage;
