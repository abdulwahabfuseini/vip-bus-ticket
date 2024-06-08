"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Routes } from "@/assets/Routes";
import TicketCard from "./TicketCard";

const Ticket = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [loading]);

  return (
    <div>
      <h1 className="text-xl sm:text-3xl capitalize py-6 sm:py-4 sm: font-bold">
        select departure time for your <span>Accra</span> to{" "}
        <span>Kumasi </span>trip
      </h1>
      <div>
        {loading ? (
          <div className="relative h-60 flex items-center justify-center flex-col">
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
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {Routes.slice(0, 2).map((ticket) => (
              <div key={ticket.id}>
                <TicketCard
                  id={ticket?.id}
                  departure={ticket?.departure}
                  arrival={ticket?.arrival}
                  price={ticket?.price}
                  time={ticket?.time}
                  arrivalTime={ticket?.arrivalTime}
                  date={ticket?.date}
                  seats={ticket?.seats}
                  terminal={ticket?.terminal}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Ticket;
