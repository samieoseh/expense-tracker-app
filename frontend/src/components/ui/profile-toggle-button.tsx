import React from "react";

function ProfileToggleButton({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div>
      {icon}
      {children}
    </div>
  );
}

export default ProfileToggleButton;
