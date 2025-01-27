"use client";

import { Navigate } from "@/assets/Navigation";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { useSession } from "next-auth/react";
import Profile from "./Profile";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 200 ? setSticky(true) : setSticky(false);
    });
  }, []); 
  return (
    <div
      className={`${
        sticky
          ? "fixed top-0 text-white shadow-yellow-500/20 z-50 shadow-sm"
          : " relative"
      }   transition-all ease-in w-full bg-white`}
    >
      <div className="">
        <div className={`${sticky ? "" : "hidden"}`}>
          <Image
            src="/images/kente3.png"
            alt="banner"
            fill
            objectFit="cover"
            className=" "
          />
        </div>
        <nav
          aria-label="navbar"
          className={`${
            sticky ? "bg-red-600" : "bg-white"
          } pb-1.5 px-3 bg-opacity-90 sm:bg-opacity-85 relative`}
        >
          <nav className="flex   items-center justify-between max-w-7xl mx-auto text-xl font-semibold font-mono">
            <div className="flex items-center  gap-[4vw]">
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
              <ul className=" hidden sm:flex items-center gap-5 divide-x-2">
                {Navigate.map((navItem) => (
                  <li
                    key={navItem.id}
                    className={`${
                      sticky ? "hover:text-black" : "hover:text-red-600"
                    } pl-4`}
                  >
                    <Link 
                    href={navItem.path}
                      className={
                          pathname === navItem.path ? 'underline underline-offset-8 transition-all text-xl font-bold uppercase text-red-500' : ''
                        }
                    >
                    {navItem.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-6">
              <div>
                {session ? (
                  <div className="flex items-center gap-5 divide-x-2">
                    <Link href="/booking"  className={`${
                      sticky ? "hover:text-black" : "hover:text-red-600"
                    }`}>
                      My Booking
                    </Link>
                    <Profile />
                  </div>
                ) : (
                  <Link href="/signin" className="text-lg font-semibold border-2 px-3 hover:bg-red-500 hover:text-white py-1.5 rounded-md">
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
        </nav>
      </div>
    </div>
  );
};

export default Navbar;