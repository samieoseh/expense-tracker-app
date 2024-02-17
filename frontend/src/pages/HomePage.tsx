import { ModeToggle } from "../components/ui/mode-toggle";

const HomePage = () => {
  return (
    <div className="w-[90%] flex flex-col space-y-8 pt-8 mx-auto">
      <div className="self-end">
        <ModeToggle />
      </div>
      <h1 className="text-3xl">Welcome to the Expense Tracker Home Page</h1>
      <p>
        Click{" "}
        <a href="/auth/login" className="text-underline text-blue-500">
          Here
        </a>{" "}
        to go the login page
      </p>
      <p>
        Click{" "}
        <a href="/auth/signup" className="text-underline text-blue-500">
          Here
        </a>{" "}
        to go the signup page
      </p>
      <p>
        Click{" "}
        <a href="/dashboard" className="text-underline text-blue-500">
          Here
        </a>{" "}
        to go the dashboard page
      </p>
    </div>
  );
};

export default HomePage;
