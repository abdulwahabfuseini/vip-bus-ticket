"use client";

import { Places } from "@/assets/Place";

import { Select } from "antd";
import React, { useState } from "react";
import TripTable from "./TripTable";
import HeadTitle from "../HeadTitle";

const AvailablePath = () => {
  return (
    <div className="w-full max-w-7xl mx-auto sm:py-5 px-5">
      <HeadTitle path="Available Routes" />
      <div className="flex sm:items-center sm:flex-row flex-col gap-y-6 justify-between text-gray-500">
        <p className="text-lg sm:text-xl capitalize ">
          available Buses in{" "}
          <span className=" font-semibold text-black uppercase">ACCRA</span>
        </p>
        <div>
          <h4 className="text-lg pb-2">Select Region / Station</h4>
          <Select
            className="w-full sm:w-60 rounded-lg"
            defaultValue="Pickup Location"
            style={{ height: 42, fontSize: 40, textAlign: "left" }}
            // onChange={handleChange}
            dropdownStyle={{ fontSize: "16px" }}
          >
            {Places.reverse().map((place, index) => (
              <Select.Option key={index} value={place.from}>
                <button className="text-base">{place.from}</button>
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="my-10">
        <TripTable />
      </div>
    </div>
  );
};

export default AvailablePath;
