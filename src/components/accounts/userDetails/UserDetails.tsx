"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { RiAccountPinCircleFill } from "react-icons/ri";

const UserDetails = () => {
  const navigate = useRouter();

  return (
    <div className="grid grid-cols-3 w-full border-2 rounded-lg">
      <div className="shadow-md col-span-1 px-5 py-6 ">
        <div className="grid place-content-center place-items-center pb-2">
        <Image
          src="/images/user.png"
          width={120}
          height={120}
          alt="profile"
          objectFit="contain"
        />
        <div className="py-2 text-center">
          <h1 className=" font-bold text-lg">Fuseini Abdul Wahab</h1>
          <p className=" font-medium text-base">
            abdulwahabfuseini78@gmail.com
          </p>
        </div>
        </div>
        
        <div className="pt-3 grid gap-y-2 border-t-2">
          <button
            onClick={() => navigate.push("/dashboard")}
            className="flex items-center gap-5 hover:bg-gray-200 text-base font-semibold border-b p-2"
          >
            <RiAccountPinCircleFill className="text-2xl" />
            <span>My Bookings</span>
          </button>
          <button
            onClick={() => navigate.push("/dashboard")}
            className="flex items-center gap-5 hover:bg-gray-200 text-base font-semibold border-b p-2"
          >
            <RiAccountPinCircleFill className="text-2xl" />
            <span>Help and Suport</span>
          </button>
          <button
            onClick={() => navigate.push("/dashboard")}
            className="flex items-center gap-5 hover:bg-gray-200 text-base font-semibold p-2"
          >
            <RiAccountPinCircleFill className="text-2xl" />
            <span>LogOut</span>
          </button>
        </div>
      </div>

      <div className=" col-span-2 shadow-inner px-5 py-6">
        <h1 className=" font-semibold text-xl">Update Details</h1>
      </div>
    </div>
  );
};

export default UserDetails;
