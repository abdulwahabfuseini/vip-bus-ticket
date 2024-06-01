import Image from "next/image";
import React from "react";

const PasswordVerification = () => {
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
          Password sent to your Email Successfully
        </h1>
        <p>
          Kindly Check your email for your{" "}
          <span className=" font-semibold">requested password</span>
        </p>
      </div>
    </div>
  );
};

export default PasswordVerification;
