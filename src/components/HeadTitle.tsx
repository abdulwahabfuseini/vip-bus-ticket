import { PathProps } from "@/contexts/Types";
import React from "react";

const HeadTitle = ({ path }: PathProps) => {
  return (
    <div>
      <h1 className="text-2xl font-mono font-semibold text-red-500">
        VIP Jeoun Transport
      </h1>
      <h1 className=" capitalize font-semibold text-3xl sm:text-4xl py-1.5">{path}</h1>
    </div>
  );
};

export default HeadTitle;
