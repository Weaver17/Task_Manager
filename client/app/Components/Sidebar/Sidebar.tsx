import React from "react";
import Profile from "../Profile/Profile";
import RadialChart from "../RadialChart/RadialChart";
import { useUserContext } from "@/context/userContext";

function Sidebar() {
  const { logoutUser } = useUserContext();

  return (
    <div className="fixed right-0 top-0 w-[20rem] mt-[6rem] h-[calc(100%-5rem)] flex flex-col BG-[#efefef] ">
      <Profile />
      <div className="mt-4 mx-6">
        <RadialChart />
      </div>
      <button
        onClick={logoutUser}
        className="mt-auto mb-8 mx-auto py-4 w-[60%] bg-red-500 text-white rounded-[50px] hover:bg-red-800 transition ease-in-out "
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
