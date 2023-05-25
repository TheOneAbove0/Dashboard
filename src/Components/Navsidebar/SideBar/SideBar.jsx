import React from "react";

//import react-icons =================>
import { MdDashboard } from "react-icons/md";
import { BsPerson, BsCreditCard2Back } from "react-icons/bs";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import { ImStatsDots } from "react-icons/im";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { MdHealthAndSafety } from "react-icons/md";
import { SiLogstash } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";




export default function SideBar() {
  return (
    <div className=" SideBar">
      <div className=" logo text-[#3f65ad] cursor-pointer font-bold px-8 py-5 text-[20px] ">
        <span>AdminDashboard</span>
      </div>
      <div className=" list grid gap-y-4 ">
        <div className="main">
          <span className=" px-4 text-gray-600 ">MAIN</span>
          <div className=" flex text-[17px] items-center gap-2 px-8 py-2  ">
            <MdDashboard className=" text-[#3f65ad] " />
            <span className=" cursor-pointer ">Dashboard</span>
          </div>
        </div>

        <div className="list">
          {" "}
          <span className=" px-4  text-gray-600 ">LISTS</span>
          <div className=" flex text-[17px] items-center gap-2 px-8 py-2  ">
            <BsPerson className=" text-[#3f65ad] " />
            <span className=" cursor-pointer  ">Users</span>
          </div>
          <div className=" flex text-[17px] items-center gap-2 px-8 py-2  ">
            <SiHomeassistantcommunitystore className=" text-[#3f65ad] " />
            <span className=" cursor-pointer ">Products</span>
          </div>
          <div className=" flex text-[17px] items-center gap-2 px-8 py-2  ">
            <BsCreditCard2Back className=" text-[#3f65ad] " />
            <span className=" cursor-pointer ">Orders</span>
          </div>
          <div className=" flex text-[17px] items-center gap-2 px-8 py-2  ">
            <TbTruckDelivery className=" text-[#3f65ad] " />
            <span className=" cursor-pointer ">Delivery</span>
          </div>
        </div>

        <div className="useful">
          <span className=" px-4  text-gray-600 ">USEFUL</span>
          <div className=" flex text-[17px] items-center gap-2 px-8 py-2  ">
            <ImStatsDots className=" text-[#3f65ad] " />
            <span className=" cursor-pointer ">Stats</span>
          </div>
          <div className=" flex text-[17px] items-center gap-2 px-8 py-2  ">
            <IoIosNotificationsOutline className=" text-[#3f65ad] " />
            <span className=" cursor-pointer ">Notifications</span>
          </div>
        </div>

        <div className="service">
          <span className=" px-4  text-gray-600 ">SERVICE</span>
          <div className=" flex text-[17px] items-center gap-2 px-8 py-2  ">
            <MdHealthAndSafety className=" text-[#3f65ad] " />
            <span className=" cursor-pointer ">System Health</span>
          </div>
          <div className=" flex text-[17px] items-center gap-2 px-8 py-2  ">
            <SiLogstash className=" text-[#3f65ad] " />
            <span className=" cursor-pointer ">Logs</span>
          </div>
          <div className=" flex text-[17px] items-center gap-2 px-8 py-2  ">
            <AiFillSetting className=" text-[#3f65ad] " />
            <span className=" cursor-pointer ">Settings</span>
          </div>
        </div>
        <div className="user">
          <span className=" px-4  text-gray-600 ">USERS</span>
          <div className=" flex text-[17px] items-center gap-2 px-8 py-2  ">
            <CgProfile className=" text-[#3f65ad] " />
            <span className=" cursor-pointer ">Profile</span>
          </div>
          <div className=" flex text-[17px] items-center gap-2 px-8 py-2  ">
            <TbLogout className=" text-[#3f65ad] " />
            <span className=" cursor-pointer  ">Logout</span>
          </div>
        </div>
      </div>
      <div className=" colorOption "><span className=" px-4  text-gray-600 ">THEME</span>

      <div className=" flex  items-center gap-2 px-8 py-2 ">
      <div className=" bg-gray-300  border rounded-lg w-7 h-7 cursor-pointer ">
            
            </div>
            <div className="  bg-black  rounded-lg w-7 h-7 cursor-pointer  ">
              
            </div>
      </div>
          </div>
    </div>
  );
}
