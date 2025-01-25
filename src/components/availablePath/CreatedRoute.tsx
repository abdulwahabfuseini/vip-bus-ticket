import Image from "next/image";
import React from "react";

const CreatedRoute = () => {
  return (
    <div className="grid place-content-center place-items-center text-center">
      <Image
        src="/images/check.gif"
        alt="verification"
        width={200}
        height={200}
        unoptimized
      />
      <div className=" capitalize">
        <h1 className="pb-2 font-semibold text-lg">
           Available Routes Created Successfully!!!
        </h1>
      </div>
    </div>
  );
};

export default CreatedRoute;
