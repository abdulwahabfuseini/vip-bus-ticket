import { Popover } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { TfiHelpAlt } from "react-icons/tfi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { toast } from "react-toastify";

const Profile = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const navigate = useRouter();

  return (
    <div>
      <Image
        src="/images/user.png"
        alt="profile"
        width={35}
        height={35}
        objectFit="contain"
        className=" cursor-pointer"
        onClick={() => setOpenDropDown((prev) => !prev)}
      />
      <div>
        {openDropDown && (
          <div className=" transition-all ease-linear sm:right-32 absolute">
            {/* <div className="bg-white shadow-lg w-5 h-5 -top-2 absolute right-[5.6vw] rotate-45"></div> */}
            <Popover
              content={
                <div className="grid pt-2">
                  <button
                    onClick={() => navigate.push("/dashboard")}
                    className="flex items-center gap-3 hover:bg-gray-200 text-base font-semibold border-b p-2"
                  >
                    <RiAccountPinCircleFill className="text-2xl" />
                    <span>Accounts Details</span>
                  </button>
                  <button
                    onClick={() => navigate.push("/booking")}
                    className="flex items-center gap-3 hover:bg-gray-200 text-base font-semibold border-b p-2"
                  >
                    {/* <Image
                      src="/images/open-book.png"
                      alt="logo"
                      width={24}
                      height={24}
                      priority
                      quality={100}
                      className=" object-contain"
                      loading="eager"
                    /> */}
                    <RiAccountPinCircleFill className="text-2xl" />
                    <span>Bookings</span>
                  </button>
                  <button
                    onClick={() => navigate.push("/contact")}
                    className="flex items-center gap-3 hover:bg-gray-200 text-base font-semibold border-b p-2"
                  >
                    <TfiHelpAlt className="text-2xl" />
                    <span>Help / Support</span>
                  </button>
                  <button className="flex items-center gap-3 hover:bg-gray-200 text-base font-semibold border-b p-2">
                    {/* <Image
                      src="/images/bin.png"
                      alt="logo"
                      width={24}
                      height={24}
                      priority
                      quality={100}
                      className=" object-contain"
                      loading="eager"
                    /> */}
                    <RiAccountPinCircleFill className="text-2xl" />
                    <span>Cart</span>
                  </button>
                  <button
                    onClick={() => navigate.push("/terms")}
                    className="flex items-center gap-3 hover:bg-gray-200 text-base font-semibold p-2"
                  >
                    <BiLogOut className="text-2xl" />
                    <span>Terms & Conditions</span>
                  </button>
                  <button
                    onClick={() => {
                      signOut(), 
                      navigate.push("/")
                      toast.success("Logged Out Successfully");
                    }}
                    className="flex items-center gap-3 hover:bg-gray-200 text-base font-semibold p-2"
                  >
                    <BiLogOut className="text-2xl" />
                    <span>Logout</span>
                  </button>
                </div>
              }
              title=""
              trigger="click"
              open={openDropDown}
            >
              <button className="bg-white shadow-xl p-1.5 rounded-full"></button>
            </Popover>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
