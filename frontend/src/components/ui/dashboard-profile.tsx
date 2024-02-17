import { RecurringIcon } from "./icons";
import ProfileBtn from "./profile-btn";
import ProfilePhoto from "../../assets/photo.jpg";
import ProfileToggleButton from "./profile-toggle-button";
import { ModeToggle } from "./mode-toggle";
import BankAccount from "./profile/bank-account";
import { useState } from "react";
import ChangePassword from "./profile/change-password";

const DashboardProfile = () => {
  const [componentOverlay, setComponentOverlay] =
    useState<null | React.JSX.Element>(null);

  const handleClose = () => {
    setComponentOverlay(null);
  };

  console.log(componentOverlay);
  return (
    <div className="pt-2">
      <div className="flex justify-end w-[95%]">
        <ModeToggle />
      </div>
      {/* Profile header */}
      <h1 className="text-center text-2xl font-bold">Profile</h1>
      <div className="flex justify-center flex-col items-center pt-8">
        <div className="h-20 w-20 rounded-full overflow-hidden">
          <img src={ProfilePhoto} alt="user profile image" />
        </div>
        <div className="flex flex-col justify-center items-center pt-4 space-y-1">
          <p className="text-xl">Kate Briggs</p>
          <p className="text-sm text-[#c8c8c8]">katebriggs@gmail.com</p>
          <p className="text-sm text-[#c8c8c8]">08056126136</p>
        </div>
      </div>
      <div className="flex flex-col gap-8 dark:bg-[#151515] bg-[#fbfbfb] pt-4 mt-4 pb-16">
        {/* Financial Overview */}
        <div>
          <div className="w-[90%] mx-auto">
            <h2 className="text-xs text-[#8a8a8a]">Financial Overview</h2>
            <ProfileBtn
              icon={<RecurringIcon />}
              onButtonClick={() =>
                setComponentOverlay(<BankAccount handleClose={handleClose} />)
              }
            >
              Bank Account
            </ProfileBtn>
            <ProfileBtn
              icon={<RecurringIcon />}
              onButtonClick={() =>
                setComponentOverlay(<BankAccount handleClose={handleClose} />)
              }
            >
              Currency
            </ProfileBtn>
          </div>
        </div>
        {/* Security and Privacy */}
        <div>
          <div className="w-[90%] mx-auto">
            <h2 className="text-xs text-[#8a8a8a]">Security and Privacy</h2>
            <ProfileBtn
              icon={<RecurringIcon />}
              onButtonClick={() =>
                setComponentOverlay(
                  <ChangePassword handleClose={handleClose} />,
                )
              }
            >
              Change Password
            </ProfileBtn>
            <ProfileBtn
              icon={<RecurringIcon />}
              onButtonClick={() =>
                setComponentOverlay(<BankAccount handleClose={handleClose} />)
              }
            >
              Authentication
            </ProfileBtn>
            <ProfileBtn
              icon={<RecurringIcon />}
              onButtonClick={() =>
                setComponentOverlay(<BankAccount handleClose={handleClose} />)
              }
            >
              Privacy Settings
            </ProfileBtn>
          </div>
        </div>
        {/* Notifications */}
        <div>
          <div className="w-[90%] mx-auto">
            <h2 className="text-xs text-[#8a8a8a]">Notifications</h2>
            <ProfileToggleButton icon={<RecurringIcon />}>
              Email Alerts
            </ProfileToggleButton>
            <ProfileToggleButton icon={<RecurringIcon />}>
              Push Alerts
            </ProfileToggleButton>
          </div>
        </div>

        {/* Suppor and Account Management */}
        <div>
          <div className="w-[90%] mx-auto">
            <h2 className="text-xs text-[#8a8a8a]">
              Support and Account Management
            </h2>
            <div>
              <ProfileBtn
                icon={<RecurringIcon />}
                onButtonClick={() =>
                  setComponentOverlay(<BankAccount handleClose={handleClose} />)
                }
              >
                Help Center
              </ProfileBtn>
              <ProfileBtn
                icon={<RecurringIcon />}
                onButtonClick={() =>
                  setComponentOverlay(<BankAccount handleClose={handleClose} />)
                }
              >
                Contact Support
              </ProfileBtn>
              <ProfileBtn
                icon={<RecurringIcon />}
                showArrow={false}
                onButtonClick={() => console.log("log out")}
              >
                Log Out
              </ProfileBtn>
              <ProfileBtn
                icon={<RecurringIcon />}
                onButtonClick={() =>
                  setComponentOverlay(<BankAccount handleClose={handleClose} />)
                }
              >
                Delete Account
              </ProfileBtn>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`h-screen z-10 bg-background fixed overscroll-none top-0 left-0 right-0 bottom-0 ${componentOverlay ? "transform -translate-x-0 duration-300 ease-in-out" : "transform -translate-x-full duration-300 ease-in-out"}`}
      >
        {componentOverlay}
      </div>
    </div>
  );
};

export default DashboardProfile;
