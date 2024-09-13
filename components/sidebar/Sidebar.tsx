"use client";
import Link from "next/link";
import { useState } from "react";
import {IoHomeOutline,IoPowerSharp} from "react-icons/io5";
import {TbUsers} from "react-icons/tb";
import {FaList} from "react-icons/fa";
const Sidebar =()=> {
  const [close, setClose] = useState(false);
    const handleCloseOpen = () => {
      setClose(!close);
    };
  return (
    <div className="h-[100vh] shadow-xl">
      <h3 className="flex justify-center font-semibold m-2 text-2xl">Dashboard</h3>
      <ul className="flex flex-col items-center text-[15px] text-left space-y-10 mt-10">
      <Link href="/admin">
        <li className="flex items-center text-left hover:text-slate-200 cursor-pointer font-semibold">
        <IoHomeOutline className="text-2xl mr-2"/>
          Home
        </li>
        </Link>
        <Link href="/admin/users">
        <li className="flex items-center text-left hover:text-slate-200 cursor-pointer font-semibold">
        <TbUsers className="text-2xl mr-2"/>
          Users
        </li>
        </Link>
        <Link href="/admin/settings">
        <li className="flex items-center text-left hover:text-slate-200 cursor-pointer font-semibold">
        <FaList className="text-2xl mr-2"/>
          Products
        </li>
        </Link>
        <div className="relative">
          <li
            onClick={handleCloseOpen}
            className="flex text-left hover:text-slate-200 cursor-pointer font-semibold"
          >
            <IoPowerSharp className="text-2xl mr-2"/>
            Logout
          </li>
          {close && (
            <div className="absolute p-[10px] bg-indigo-400 top-[-10px] z-999 shadow-xl h-[200px] w-[200px]">
              <span className="flex items-center justify-center p-2 text-xl text-white">
                Are you sure you want to logout?
              </span>
              <Link href="/">
              <button
                onClick={handleCloseOpen}
                className="bg-white p-[10px] cursor-pointer"
              >
                Close
              </button>
              </Link>
            </div>
          )}
        </div>
      </ul>
    </div>
  )
}

export default Sidebar