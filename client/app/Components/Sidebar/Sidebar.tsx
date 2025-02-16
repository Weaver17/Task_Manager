import React from "react";
import Profile from "../Profile/Profile";
import RadialChart from "../RadialChart/RadialChart";
import { useUserContext } from "@/context/userContext";

function Sidebar() {
  return (
    <div className="fixed right-0 top-0 w-[20rem] mt-[6rem] h-[calc(100%-5rem)] flex flex-col BG-[#efefef] ">
      <Profile />
      <div className="mt-4 mx-6">
        <RadialChart />
      </div>
    </div>
  );
}

export default Sidebar;
