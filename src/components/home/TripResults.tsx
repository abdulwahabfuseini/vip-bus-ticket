"use client";

import { Modal } from "antd";
import Image from "next/image";
import { useState } from "react";
import Ticket from "../path/Ticket";
import { TicketProps } from "@/contexts/Types";

const TripResults = ({
  departure,
  arrival,
  price,
  ticket,
  time,
  terminal,
}: TicketProps) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="border-2 w-full h-72 sm:h-36 relative overflow-hidden">
        <Image src="/images/kente3.png" alt="banner" fill objectFit="cover" />
        <div className="grid grid-cols-2 gap-x-1 sm:grid-cols-5 sm:place-content-center sm:place-items-center  py-3 px-4 sm:px-6 bg-opacity-70 sm:bg-opacity-65 text-white h-72 sm:h-36 bg-black top-0  w-full absolute left-0">
          <div>
            <div className=" text-2xl flex flex-col sm:flex-row sm:items-center gap-x-2 font-bold">
              <h4 className=" ">
                {departure} <span className=" sm:hidden">-</span>{" "}
              </h4>
              <span className="hidden sm:block">-</span>
              <h4 className=" ">{arrival}</h4>
            </div>
            <span className="text-sm">Air Conditioned</span>
          </div>
          <div>
            <Image src="/images/clock.png" alt="star" width={25} height={25} />
            <h1 className=" font-semibold py-1">Sunday</h1>
            <button className="bg-green rounded-sm my-1 pb-[1.2px] text-sm bg-green-500 text-white px-2.5">
              {time} pm
            </button>
          </div>
          <div>
            <Image src="/images/star.png" alt="star" width={25} height={25} />
            <div className="pt-4">
              <h1>Terminal</h1>
              <p className=" font-semibold uppercase">{terminal}</p>
            </div>
          </div>
          <div>
            <Image src="/images/cedi.png" alt="star" width={30} height={30} />
            <h1 className="text-lg lg:text-4xl font-semibold pt-1">
              GHC {price}.00
            </h1>
            <span className=" font-normal text-sm text-gray-300">
              per pessenger
            </span>
          </div>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-red-500 w-24 sm:py-2 text-base text-white font-semibold rounded-md"
          >
            {ticket}
          </button>
        </div>
      </div>
      <Modal
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        width={1000}
        centered
        footer={null}
      >
        <Ticket />
      </Modal>
    </div>
  );
};

export default TripResults;
