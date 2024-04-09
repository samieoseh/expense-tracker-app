import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export default function UserIcon({ value }: { value: string }) {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="border-none rounded-[100%] flex items-center justify-center w-8 h-8 bg-blue-500 cursor-pointer">
          <p className="text-sm text-white">{value}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-12">
        <DropdownMenuItem onClick={() => navigate("/auth/login")}>
          Sign in
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            localStorage.setItem("accessToken", "");
            navigate("/auth/login");
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
