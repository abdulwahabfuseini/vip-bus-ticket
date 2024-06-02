"use client";

import { Places } from "@/assets/Place";

import { Select } from "antd";
import React, { useState } from "react";
import TripTable from "./TripTable";

const Path = () => {
  return (
    <div className="w-full max-w-7xl mx-auto sm:py-5 px-5">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-mono">
        Available Routes
      </h1>
      <div className="flex sm:items-center sm:flex-row flex-col gap-y-6 justify-between text-gray-500">
        <p className="text-lg sm:text-xl capitalize ">
          available Buses in{" "}
          <span className=" font-semibold text-black">ACCRA</span>
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
      <div className="my-16">
        <TripTable />
      </div>
    </div>
  );
};

export default Path;
