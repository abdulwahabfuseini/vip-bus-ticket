"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import TicketCard from "./TicketCard";
import { FormData } from "@/contexts/Types";

interface Props {
  routes: FormData[];
}

const Ticket: React.FC<Props> = ({ routes }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [loading]);

  return (
    <div>
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
          <div>
            {routes.map((ticket) => (
              <div key={ticket.id}>
                <h1 className="text-xl sm:text-3xl  py-6 sm:py-4 sm: font-bold">
                  Select Departure Time for your <span>{ticket?.from}</span> to{" "}
                  <span>{ticket?.to}</span> {" "}trip
                </h1>
                <div className="grid sm:grid-cols-2 gap-4">
                  {ticket.schedule.map((schedule, index) => (
                    <TicketCard
                      {...ticket}
                      scheduleItem={schedule}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Ticket;
