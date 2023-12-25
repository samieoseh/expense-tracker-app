import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { ModeToggle } from "../../components/ui/mode-toggle";

const LoginPage = () => {
  return (
    <div className="min-h-[100vh] bg-background">
      <div className="w-[90%] mx-auto pt-4 flex flex-col">
        <div className="self-end">
          <ModeToggle />
        </div>
        <div className="pt-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-foreground font-bold text-[1.5rem]">
              WELCOME BACK!
            </h1>
            <p className="text-muted-foreground">
              Please enter your details to sign in to your account
            </p>
          </div>
          <form className="flex pt-8 flex-col gap-8">
            <Input
              className="bg-[#fafafa] border-none h-14 outline-none text-foreground pl-4 dark:bg-[#2d2d2f]"
              placeholder="Email"
            />
            <div>
              <Input
                className="bg-[#fafafa] border-none h-14 outline-none text-foreground pl-4 dark:bg-[#2d2d2f]"
                placeholder="Password"
              />
              <Link
                className="text-foreground pt-2 inline-block float-right"
                to="/auth/login"
              >
                Forgot Password
              </Link>
            </div>
            <Button className="bg-secondary w-full rounded-md h-14 dark:text-white tracking-widest">
              SIGN IN
            </Button>
          </form>
          <p className="text-muted-foreground text-center pt-4">
            Don&quot;t have an account{" "}
            <Link to="/auth/login" className="text-foreground underline">
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
