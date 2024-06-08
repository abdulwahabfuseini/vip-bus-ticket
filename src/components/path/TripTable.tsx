"use client";

import { Routes } from "@/assets/Routes";
import { Modal } from "antd";
import React, { useState } from "react";
import Ticket from "./Ticket";
import Image from "next/image";

const TripTable = () => {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
              {Routes.map((route, index) => (
                <tr key={index}>
                  <td className="px-4 text-sm border-2 text-darkgrey py-6">
                    {route?.departure}
                  </td>
                  <td className="px-4 text-sm border-2 text-darkgrey py-6">
                    {route?.arrival}
                  </td>
                  <td className="px-4 text-sm border-2 text-darkgrey py-6">
                    {route?.type}
                  </td>
                  <td className="px-4  text-sm border-2 text-darkgrey py-6">
                    {route?.schedule} <br />
                    <button className="bg-blue-50 font-semibold py-1 px-2 text-xs rounded-md text-blue-800 border-blue-800 border mt-2">
                    {route?.time} <span> pm</span>
                    </button>
                  </td>
                  <td className="px-4 text-sm border-2 text-darkgrey py-6">
                    <span className="font-semibold">₵ </span> {route?.price}.00
                  </td>
                  <td className="px-4 text-sm border-2 text-darkgrey  py-6">
                    <button
                      onClick={() => setOpenModal(true)}
                      className="bg-red-500 py-2 px-3 text-sm text-white font-semibold rounded-md"
                    >
                      {route?.ticket}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
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
      <div className=" sm:hidden">
        {Routes.map((route, index) => (
          <div key={index} className="border-2 w-full h-72 mb-1.5 relative ">
            <Image
              src="/images/kente3.png"
              alt="banner"
              fill
              objectFit="cover"
            />
            <div className="  grid grid-cols-2 py-3 px-4 bg-opacity-70 text-white h-72 bg-black top-0  w-full absolute left-0">
              <div className=" text-2xl font-bold">
                <h4 className=" ">{route?.departure} - </h4>
                <h4 className=" ">{route?.arrival}</h4>
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
                <h1 className=" font-semibold py-1">Sunday</h1>
                <button className="bg-green rounded-sm my-1 pb-[1.2px] text-sm bg-green-500 text-white px-2.5">
                  {route?.time} pm
                </button>
              </div>
              <div className="pt-6 pb-2">
                <h1>Terminal</h1>
                <p className=" font-semibold uppercase">{route?.terminal}</p>
              </div>
              <div>
                <Image
                  src="/images/cedi.png"
                  alt="star"
                  width={35}
                  height={35}
                />
                <h1 className=" text-lg font-semibold pt-1">
                  GHC {route?.price}.00
                </h1>
                <span className=" font-normal text-sm text-gray-300">
                  per pessenger
                </span>
              </div>
              <button
                onClick={() => setOpenModal(true)}
                className="bg-red-500 w-24 py-2 text-base text-white font-semibold rounded-md"
              >
                {route?.ticket}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripTable;
