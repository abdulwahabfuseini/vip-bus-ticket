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
        <div className="w-full h-screen grid place-items-center place-content-center gap-4">
          <div className="relative shadow-md rounded-full animate-pulse">
            <Image
              fill
              src="/images/logo.png"
              alt="logo"
              priority
              id="logo"
              className="p-2 object-contain"
            />
          </div>
          <h1 className="font-bold text-lg ">V.I.P</h1>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Loading;
