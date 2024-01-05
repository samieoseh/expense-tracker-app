import React from "react";
import { DashboardStateType } from "../../typings";

const BottomNavigationAction = ({
  value,
  label,
  setValue,
  activeIcon,
  inactiveIcon,
}: {
  value: DashboardStateType;
  label: DashboardStateType;
  setValue: React.Dispatch<React.SetStateAction<DashboardStateType>>;
  activeIcon: JSX.Element;
  inactiveIcon: JSX.Element;
}) => {
  return (
    <button
      onClick={() => {
        setValue(label);
      }}
    >
      {value === label ? activeIcon : inactiveIcon}
    </button>
  );
};

export default BottomNavigationAction;
