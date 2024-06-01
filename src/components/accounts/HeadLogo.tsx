import Image from "next/image";
import React from "react";

const HeadLogo = () => {
  return (
    <div className="absolute bg-white border-red-300 border w-24 h-24 rounded-full  grid place-content-center place-items-center">
      <div className="relative">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={100}
          objectFit="contain"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 right-0">
          <Image
            src="/images/flag1.png"
            alt="logo"
            width={90}
            height={90}
            objectFit="contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default HeadLogo;
