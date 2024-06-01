"use client";

import { Navigate } from "@/assets/Navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { useSession } from "next-auth/react";
import Profile from "./Profile";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="w-full bg-white px-3 sm:px-4">
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
            {Navigate.slice(0, 4).map((navItem) => (
              <li key={navItem.id} className="text-lg font-semibold">
                <Link href={navItem.path}>{navItem.display}</Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex items-center gap-6">
          <li className="text-lg font-semibold hidden sm:flex">
            <Link href="/booking">Booking</Link>
          </li>
          <li>
            {session ? (
              <Profile />
            ) : (
              <Link href="/signin" className="text-lg font-semibold">
                Login
              </Link>
            )}
          </li>
          <MobileNav />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
