"use client";

import { Modal } from "antd";
import React, { useState } from "react";
import Image from "next/image";
import Ticket from "./Ticket";
import { FormData } from "@/contexts/Types";
import moment from "moment";

interface Props {
  routes: FormData[];
  selectedDate: moment.Moment | null;
}

const TripTable: React.FC<Props> = ({ routes, selectedDate }) => {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<FormData | null>(null);

  const extractTime = (isoString: string) => {
    const date = moment(isoString);
    const hours = date.format("HH");
    const minutes = date.format("mm");
    return `${hours}:${minutes}`;
  };

  const handleOpenModal = (route: FormData) => {
    setSelectedRoute(route);
    setOpenModal(true);
  };

  const getFirstScheduleTime = (route: FormData) => {
    if (!route.schedule || route.schedule.length === 0) {
      return null;
    }
    const firstScheduleTime = moment(route.schedule[0].time);
    return firstScheduleTime;
  };

  const getDayOfWeek = (isoString: string) => {
    const date = moment(isoString);
    return date.format("dddd");
  };

    if (routes.length === 0) {
    return (
    <div className="p-4 text-center text-lg text-gray-600">
        No Available Route For Today
      </div>
    )
   }

  return (
    <div>
      <div className="hidden sm:block">
        <table className=" table-auto min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-grey">
              <th className="px-4 text-left uppercase border-2 text-sm text-darkgrey py-5">
                Departure
              </th>
              <th className="px-4 uppercase border-2  text-left text-sm text-darkgrey py-5">
                Arrival
              </th>
              <th className="px-4 uppercase border-2  text-left text-sm text-darkgrey py-5">
                Trip Type
              </th>
              <th className="px-4 uppercase border-2  text-left text-sm text-darkgrey py-5">
                Schedule
              </th>
              <th className="px-4 uppercase border-2  text-left text-sm text-darkgrey py-5">
                Price
              </th>
              <th className="px-4 uppercase border-2  text-left text-sm text-darkgrey py-5">
                Ticket
              </th>
            </tr>
          </thead>
          {loading ? (
            <h1 className="p-6 font-semibold">Loading...</h1>
          ) : (
            <tbody>
              {routes.map((route, index) => (
                <tr key={index} className="border-2">
                  <td className="px-4 text-sm border-r-2 text-darkgrey py-6">
                    {route?.from}
                  </td>
                  <td className="px-4 text-sm border-r-2 text-darkgrey py-6">
                    {route?.to}
                  </td>
                  <td className="px-4 text-sm border-r-2 capitalize text-darkgrey py-6">
                    {route?.type}
                  </td>
                  <td className="px-4 border-r-2 text-darkgrey py-6 flex flex-col items-start gap-y-1.5">
                    {route.schedule && route.schedule.length > 0 && (
                      <span className="font-semibold text-gray-500 text-sm">
                        {getDayOfWeek(route.schedule[0].time)}
                      </span>
                    )}
                    <div className="flex gap-x-2">
                    {route.schedule?.map((schedule, index) => (
                      <button
                        key={index}
                        className="bg-blue-50 font-semibold py-1 px-2 text-xs rounded-md text-blue-800 border-blue-800 border"
                      >
                        {extractTime(schedule.time)} <span>pm</span>
                      </button>
                    ))}
                    </div>
                  </td>
                  <td className="px-4 text-sm border-r-2 text-darkgrey py-6">
                    <span className="font-semibold">₵ </span>{" "}
                    {route?.schedule && route.schedule[0].price}.00
                  </td>
                  <td className="px-4 text-sm border-r-2 text-darkgrey  py-6">
                    <button
                      onClick={() => handleOpenModal(route)}
                      className="bg-red-500 py-2 px-3 text-sm text-white font-semibold rounded-md"
                    >
                      Book Ticket
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <Modal
        title={""}
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => {
          setOpenModal(false);
          setSelectedRoute(null);
        }}
        width={1000}
        centered
        footer={null}
      >
        {selectedRoute && <Ticket routes={[selectedRoute]} />}
      </Modal>
      <div className=" sm:hidden">
        {routes.map((route, index) => (
          <div
            key={index}
            className="border-2 w-full h-80  mb-1.5 relative overflow-hidden"
          >
            <Image
              src="/images/kente3.png"
              alt="banner"
              fill
              objectFit="cover"
            />
            <div className="  grid grid-cols-2 py-3 px-4 bg-opacity-75 text-white h-full bg-black top-0  w-full absolute left-0">
              <div className=" text-2xl font-bold">
                <h4 className=" ">{route?.from} - </h4>
                <h4 className=" ">{route?.to}</h4>
                <span className="text-sm">Air Conditioned</span>
                <Image
                  src="/images/star.png"
                  alt="star"
                  width={25}
                  height={25}
                />
              </div>
              <div>
                <Image
                  src="/images/clock.png"
                  alt="star"
                  width={25}
                  height={25}
                />
                <h1 className=" font-semibold py-1">
                  {getFirstScheduleTime(route)?.format("dddd")}
                </h1>
                {route.schedule?.map((schedule, index) => (
                  <button
                    className="bg-green rounded-sm my-1 pb-[1.2px] text-sm bg-green-500 text-white px-2.5"
                    key={index}
                  >
                    {extractTime(schedule.time)} pm
                  </button>
                ))}
              </div>
              <div className="pt-6 pb-2">
                <h1>Terminal</h1>
                <p className=" font-semibold uppercase">
                  {route?.terminal?.name}
                </p>
              </div>
              <div>
                <Image
                  src="/images/cedi.png"
                  alt="star"
                  width={35}
                  height={35}
                />
                <h1 className="text-lg font-semibold pt-1">
                  GHC {route?.schedule && route.schedule[0].price}.00
                </h1>
                <span className=" font-normal text-sm text-gray-300">
                  per pessenger
                </span>
              </div>
              <button
                onClick={() => handleOpenModal(route)}
                className="bg-red-500 w-24  text-base text-white font-semibold rounded-md"
              >
                book Ticket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripTable;