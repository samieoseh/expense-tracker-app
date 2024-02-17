import { ChevronRight } from "lucide-react";
import React, { ReactNode } from "react";

function ProfileBtn({
  children,
  icon,
  onButtonClick,
  showArrow = true,
}: {
  children: ReactNode;
  icon: React.JSX.Element;
  onButtonClick: () => void;
  showArrow?: boolean;
}) {
  return (
    <>
      <button
        className="py-4 border-b dark:border-[#262626] border-[#ececec] flex justify-between w-full items-center"
        onClick={onButtonClick}
      >
        <div className="flex gap-4">
          {icon}
          <p className="text-sm">{children}</p>
        </div>
        {showArrow && (
          <div className="h-8 w-8 rounded-full bg-[#2a2a2a] flex items-center justify-center">
            <ChevronRight />
          </div>
        )}
      </button>
    </>
  );
}

export default ProfileBtn;
