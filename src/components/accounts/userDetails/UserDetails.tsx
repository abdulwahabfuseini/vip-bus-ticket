"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RiAccountPinCircleFill } from "react-icons/ri";
import DetailForm from "./DetailForm";
import { signOut, useSession } from "next-auth/react";
import { toast } from "react-toastify";

const UserDetails = () => {
  const navigate = useRouter();
  const session = useSession();

  // useEffect(() => {
  //   if (session?.status === "unauthenticated") {
  //     navigate.push("/");
  //     toast.info("Please Login to Have Access to the Dashboard", {
  //       position: "top-center",
  //     });
  //   }
  // });

  return (
    <div className="grid md:grid-cols-3 w-full border-2 rounded-lg">
      <div className="shadow-md w-full md:col-span-1 px-5 py-6 ">
        <div className="grid place-content-center place-items-center pb-2">
          <Image
            src="/images/user.png"
            width={120}
            height={120}
            alt="profile"
            objectFit="contain"
          />
          <div className="py-2 text-center w-full truncate">
            <h1 className=" font-bold text-lg">Fuseini Abdul Wahab</h1>
            <h5 className="font-medium text-sm">
              abdulwahabfuseini78@gmail.com
            </h5>
          </div>
        </div>
        <div className="pt-3 grid gap-y-2 border-t-2">
          <button
            onClick={() => navigate.push("/booking")}
            className="flex items-center gap-5 hover:bg-red-200 text-base font-semibold border-b p-2"
          >
            <RiAccountPinCircleFill className="text-2xl" />
            <span>My Bookings</span>
          </button>
          <button
            onClick={() => navigate.push("/supports")}
            className="flex items-center gap-5 hover:bg-red-200 text-base font-semibold border-b p-2"
          >
            <RiAccountPinCircleFill className="text-2xl" />
            <span>Help and Suport</span>
          </button>
          <button
            onClick={() => {
              signOut();
              toast.success("Logged Out Successfully");
            }}
            className="flex items-center gap-5 hover:bg-red-200 text-base font-semibold p-2"
          >
            <RiAccountPinCircleFill className="text-2xl" />
            <span>LogOut</span>
          </button>
        </div>
      </div>
      <div className=" md:col-span-2 shadow-inner px-5 py-6">
        <h1 className=" font-semibold text-3xl text-center">Update Details</h1>
        <DetailForm />
      </div>
    </div>
  );
};

export default UserDetails;
