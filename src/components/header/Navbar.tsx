"use client";

import { Navigate } from "@/assets/Navigation";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { useSession } from "next-auth/react";
import Profile from "./Profile";

const Navbar = () => {
  const { data: session } = useSession();
  const [sticky, setSticky] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const openDrawer = () => setOpenNav(true);
  const closeDrawer = () => setOpenNav(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  });

  return (
    <div
      className={`${
        sticky ? "fixed  top-0 shadow-indigo-500/20  z-50 " : " relative"
      }  px-3 sm:px-6 transition-all ease-in w-full bg-white`}
    >
      <nav className="w-full max-w-7xl h-full mx-auto flex items-center justify-between">
        <div className="flex items-center gap-[4vw]">
          <Link href="/">
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={110}
                height={100}
                objectFit="contain"
                loading="lazy"
                className="movement"
              />
              <div className="absolute top-0 right-0 transition-all">
                <Image
                  src="/images/flag1.png"
                  alt="logo"
                  width={110}
                  height={100}
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
          <ul className=" hidden sm:flex items-center gap-6">
            {Navigate.map((navItem) => (
              <li key={navItem.id} className="text-lg lg:text-xl font-mono hover:text-red-600 font-semibold">
                <Link href={navItem.path}>{navItem.display}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          
          <div>
            {!session ? (
              <Profile />
            ) : (
              <Link href="/signin" className="text-lg font-semibold">
                Login
              </Link>
            )}
          </div>
          <MobileNav
          // openNav={openNav}
          // openDrawer={openDrawer}
          // closeDrawer={closeDrawer}
          // setOpenNav={setOpenNav}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
