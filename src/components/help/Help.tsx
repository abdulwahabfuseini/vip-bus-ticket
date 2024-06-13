import { ContactInfo } from "@/assets/Data";
import Image from "next/image";
import React from "react";

const Help = () => {
  return (
    <div className="px-3 sm:px-5">
      <div>
        <h1 className="text-xl font-semibold text-red-500">
          VIP Jeoun Transport
        </h1>
        <h4 className="text-3xl sm:text-4xl font-semibold font-mono py-1.5">
          Contact Us Today
        </h4>
        <p className="w-full sm:w-3/4">
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
              className="flex items-center mb-4 lg:mb-8 gap-x-3 sm:gap-x-4"
            >
              <div className="relative object-contain w-12 h-12 rounded-full light-background md:w-20 md:h-20">
                <Image
                  src={`/images/${info?.icon}`}
                  alt=""
                  fill
                  className="object-contain rounded-md p-2 shadow-md md:p-4"
                />
              </div>
              <div>
                <p className="text-lg">{info?.title}</p>
                <a
                  className="font-semibold text-gray-400 "
                  href="mailto:abdulwahabfuseini78@gmail.com"
                >
                  {info?.email}
                </a>
                <a
                  className="font-semibold text-gray-400"
                  href="tel:+233245264999"
                >
                  {info?.phone}
                </a>
                <p className="font-semibold text-gray-400">{info?.address}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Help;
