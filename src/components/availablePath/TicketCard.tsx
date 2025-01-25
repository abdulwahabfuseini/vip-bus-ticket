"use client";

import { Modal } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import TripDetails from "./TripDetails";
import { TicketProps } from "@/contexts/Types";

const TicketCard = ({
  id,
  departure,
  arrival,
  time,
  seats,
  date,
  price,
  arrivalTime,
  terminal,
}: TicketProps) => {
  const [openDetail, setOpenDetails] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpenDetails(true)}
        className=" rounded-lg overflow-hidden border-2 border-b-0 cursor-pointer bg-red-500 hover:bg-green-500 hover:border-green-500 border-red-500"
      >
        <div className="relative w-full h-40 lg:h-24 overflow-hidden rounded-b-xl">
          <Image src="/images/kente3.png" alt="kente3" fill objectFit="cover" />
          <div className="py-2 px-3 flex gap-2 justify-between sm:gap-8 lg:gap-6 bg-black top-0 left-0 absolute w-full h-full bg-opacity-75 text-white rounded-b-lg">
            <button className="bg-slate-100 text-gray-500 rounded-full w-8 h-8 font-semibold sm:text-lg">
              {id}
            </button>
            <div className="grid grid-auto-fit-xs lg:grid-cols-2 gap-y-2  lg:gap-y-3 pb-2 gap-x-4 sm:flex-1">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/route.png"
                  alt="road"
                  width={28}
                  height={28}
                />

                <h1 className=" font-medium capitalize">
                  <span>{departure}</span> to <span>{arrival}</span>
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/calendar.png"
                  alt="calendar"
                  width={28}
                  height={28}
                />
                <h1 className=" font-medium capitalize">{date}</h1>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/seats.png"
                  alt="seats"
                  width={28}
                  height={28}
                />
                <h1 className=" font-medium capitalize">
                  <span>{seats}</span> Seats available
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/clock.png"
                  alt="clock"
                  width={28}
                  height={28}
                />

                <h1 className=" font-medium text-green-500">{time} PM</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-white font-semibold">
          <h1>
            Arrival Time: {arrivalTime} <span className="uppercase">PM</span>
          </h1>
        </div>
      </div>
      <Modal
        open={openDetail}
        onOk={() => setOpenDetails(false)}
        onCancel={() => setOpenDetails(false)}
        width={1000}
        centered
        footer={null}
      >
        <TripDetails
          departure={departure}
          arrival={arrival}
          price={price}
          time={time}
          date={date}
          terminal={terminal}
        />
      </Modal>
    </div>
  );
};

export default TicketCard;
