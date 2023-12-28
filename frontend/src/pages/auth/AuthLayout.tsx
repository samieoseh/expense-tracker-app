import { Outlet } from "react-router-dom";
import { ModeToggle } from "../../components/ui/mode-toggle";

const AuthLayout = () => {
  return (
    <div className="min-h-[100vh] bg-background overflow-y-hidden">
      <div className="w-[90%] mx-auto pt-4 flex flex-col">
        <div className="self-end">
          <ModeToggle />
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
