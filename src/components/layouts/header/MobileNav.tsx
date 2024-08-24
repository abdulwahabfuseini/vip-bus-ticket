"use client";

import { useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { VscChevronRight } from "react-icons/vsc";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { Drawer } from "antd";
import { Navigate } from "@/assets/Navigation";
import Image from "next/image";

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);

  const openDrawer = () => setOpenNav(true);
  const closeDrawer = () => setOpenNav(false);

  return (
    <div className="flex sm:hidden">
      <button onClick={openDrawer} className="">
        <HiMiniBars3BottomRight className="w-8 h-9" />
      </button>
      <div>
        <Drawer
          closable={false}
          placement="top"
          open={openNav}
          onClose={closeDrawer}
          className="z-50 transition-all ease-in text-black"
        >
          <div className="flex items-center -mt-8 justify-between">
            <Link href="/">
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={110}
                  height={100}
                  objectFit="contain"
                  loading="lazy"
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
            <AiOutlineClose onClick={closeDrawer} className="w-8 h-8 mt-4" />
          </div>
          <ul className="pt-6">
            {Navigate.map((navLink) => (
              <li
                key={navLink.id}
                className="font-semibold cursor-pointer list-none -m-4 py-2"
              >
                <Link
                  href={navLink.path}
                  onClick={() => setOpenNav(false)}
                  className="flex items-center justify-between w-full px-4 border-t py-3 text-lg uppercase sm:text-xl"
                >
                  <span className=" hover:text-blue-600">
                    {navLink.display}
                  </span>{" "}
                  <span>
                    <VscChevronRight />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Drawer>
      </div>
    </div>
  );
};

export default MobileNav;
