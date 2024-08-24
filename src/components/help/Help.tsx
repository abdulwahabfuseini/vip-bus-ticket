import { ContactInfo } from "@/assets/Data";
import Image from "next/image";
import React from "react";
import HeadTitle from "../HeadTitle";

const Help = () => {
  return (
    <div className="px-3 sm:px-5">
      <div>
        <HeadTitle path="Contact Us Today" />
        <p className="w-full text-lg font-thin sm:w-3/4">
          Feel free to get in touch with us! We would love to hear from you.
          Whether you have a question, a comment, or are looking to book our
          services, don&apos;t hesitate to reach out. We are here to assist you
          with all your online bus ticketing needs.
        </p>
      </div>

      <div className="grid w-full gap-x-9 py-5">
        {ContactInfo.map((info) => (
          <div
            key={info.id}
            className="flex items-center mb-4 lg:mb-4 gap-x-3 sm:gap-x-4"
          >
            <div className="relative object-contain w-12 h-12 rounded-full light-background md:w-20 md:h-20">
              <Image
                src={`/images/${info?.icon}`}
                alt=""
                fill
                className="object-contain rounded-md p-2 shadow md:p-4"
              />
            </div>
            <div className=" text-lg ">
              <p className="text-xl font-mono">{info?.title}</p>
              <a
                className="font-thin  text-gray-500 "
                href="mailto:abdulwahabfuseini78@gmail.com"
              >
                {info?.email}
              </a>
              <a className="font-thin text-gray-500" href="tel:+233245264999">
                {info?.phone}
              </a>
              <p className="font-thin text-gray-500">{info?.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
