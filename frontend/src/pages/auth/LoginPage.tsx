import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../../lib/schema";
import { Loader2, LucideEye, LucideEyeOff } from "lucide-react";
import { useState } from "react";
import GoogleLogo from "../../assets/google-light.svg";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../components/ui/form";
import { useAuth } from "../../AuthContext";
import { useToast } from "../../components/ui/use-toast";
import { AuthContextType } from "../../typings";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { login } = useAuth() as AuthContextType;

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "test56@gmail.com",
      password: "Password@123",
    },
  });

  const [passwordHidden, setPasswordHidden] = useState(true);

  const onSubmit = async (formData: z.infer<typeof loginFormSchema>) => {
    setIsLoading(true);
    const response = await login(formData);

    if (response.status === 201) {
      setIsLoading(false);
      localStorage.setItem(
        "accessToken",
        JSON.stringify(response.data.data["access_token"]),
      );
      navigate("/dashboard");
    } else if (response.status !== 201) {
      setIsLoading(false);
      toast({
        title: "An error occurred during signup",
        variant: "success",
      });
    }
  };
  return (
    <div className="w-[90%] lg:w-[40%] mx-auto flex flex-col">
      <div className="pt-4">
        <div className="flex flex-col space-y-4">
          <h1 className="text-foreground font-bold text-[1.5rem]">
            WELCOME BACK!
          </h1>
          <p className="text-muted-foreground text-sm">
            Please enter your details to sign in to your account
          </p>
        </div>
        <Form {...form}>
          <form
            className="flex pt-8 flex-col space-y-8"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-[#fafafa] border dark:border-none h-14 text-foreground pl-4 dark:bg-[#2d2d2f]"
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
                        className="bg-[#fafafa] border dark:border-none h-14 outline-none text-foreground pl-4 dark:bg-[#2d2d2f]"
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
                      <div>
                        <Link
                          className="text-sm text-foreground pt-2 inline-block float-right"
                          to="/auth/login"
                        >
                          Forgot Password
                        </Link>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className="font-bold text-red-500" />
                </FormItem>
              )}
            />

            <Button
              className={`bg-secondary w-full rounded-md h-14 dark:text-white tracking-widest ${
                isLoading && "opacity-50"
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                  wait...
                </>
              ) : (
                <>SIGN IN</>
              )}
            </Button>
          </form>
        </Form>
        <p className="text-muted-foreground text-center pt-4 text-sm">
          Don&quot;t have an account,{" "}
          <Link to="/auth/signup" className="text-foreground underline">
            Sign up now
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

export default LoginPage;
