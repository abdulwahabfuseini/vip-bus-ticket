"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";

const Loading = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <div className="w-full h-screen grid place-items-center place-content-center">
          <div className="relative rounded-full">
            {/* <Oval
              ariaLabel="loading-indicator"
              height={100}
              width={100}
              strokeWidth={5}
              strokeWidthSecondary={1}
              color="blue"
              secondaryColor="white"
            /> */}
            <div className="relative flex items-center flex-col">
              <h1 className="text-5xl text-red-500">
                V<span className="text-yellow-400">.I.</span>
                <span className="text-green-700">P</span>
              </h1>
              <div className=" -mt-28 mr-2 transition-all">
                <Image
                  src="/images/flag1.png"
                  alt="logo"
                  width={150}
                  height={100}
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Loading;
