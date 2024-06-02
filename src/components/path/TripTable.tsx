"use client";

import { Routes } from "@/assets/Routes";
import { Modal } from "antd";
import React, { useState } from "react";
import Ticket from "./Ticket";

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
                Traveling From
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
                    {route?.from}
                  </td>
                  <td className="px-4 text-sm border-2 text-darkgrey py-6">
                    {route?.to}
                  </td>
                  <td className="px-4 text-sm border-2 text-darkgrey py-6">
                    {route?.type}
                  </td>
                  <td className="px-4 text-sm border-2 text-darkgrey py-6">
                    {route?.schedule}
                  </td>
                  <td className="px-4 text-sm border-2 text-darkgrey py-6">
                    GHC {route?.price}.00
                  </td>
                  <td className="px-4 text-sm border-2 text-darkgrey  py-6">
                    <button
                      onClick={() => setOpenModal(true)}
                      className="bg-red-500 p-1.5 text-base text-white font-semibold rounded-md"
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
        width={400}
        centered
        footer={null}
      >
        <Ticket />
      </Modal>
      <div className=" sm:hidden">
        {Routes.map((route, index) => (
          <div
            key={index}
            className="border-2 p-4 gap-y-3 grid place-content-start"
          >
            <h1 className=" text-lg font-semibold">
              Traveling From:{" "}
              <span className=" font-normal">{route?.from}</span>
            </h1>
            <h1 className=" text-lg font-semibold">
              {" "}
              Arrival: <span className=" font-normal">{route?.to}</span>
            </h1>
            <h1 className=" text-lg font-semibold">
              Trip Type: <span className=" font-normal">{route?.type}</span>
            </h1>
            <h1 className=" text-lg font-semibold">
              Schedule: <span className=" font-normal">{route?.schedule}</span>
            </h1>
            <h1 className=" text-lg font-semibold">
              Price: <span className=" font-normal">GHC {route?.price}.00</span>
            </h1>
            <button
              onClick={() => setOpenModal(true)}
              className="bg-red-500 w-24 py-1.5 text-base text-white font-semibold rounded-md"
            >
              {route?.ticket}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripTable;
