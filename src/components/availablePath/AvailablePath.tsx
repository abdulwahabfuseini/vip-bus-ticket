"use client";

import { DatePicker, Form, message, Select } from "antd";
import React, { useEffect, useState } from "react";
import TripTable from "./TripTable";
import HeadTitle from "../HeadTitle";
import { FormData } from "@/contexts/Types";
import moment from "moment";

const AvailablePath = () => {
  const [routes, setRoutes] = useState<FormData[]>([]);
  const [selectedRoute, setSelectedRoute] = useState<string>("");
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("/api/availableRoutes");
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setRoutes(data.data);
          } else {
            console.error("Failed to fetch Cities:", data);
            message.error("Failed to load Cities, Please try again!");
          }
        } else {
          console.error("Failed to fetch Cities:", response.status);
          message.error("Failed to load Cities, Please try again!");
        }
      } catch (error) {
        console.error("Error fetching Cities:", error);
        message.error("Failed to load Cities, Please try again!");
      }
    };

    fetchCities();
  }, []);

  const handleChange = (value: string) => {
    setSelectedRoute(value);
  };

  const disabledDate = (current: any) => {
      return current && (current < moment().startOf('day') || current > moment().endOf('month'));
    };

    const handleDateChange = (date: moment.Moment | null) => {
    setSelectedDate(date);
    };

  return (
    <div className="w-full max-w-7xl mx-auto sm:py-5 px-5">
      <HeadTitle path="Available Routes" />
      <div className="flex sm:items-center sm:flex-row flex-col gap-y-6 justify-between text-gray-500">
        <p className="text-lg sm:text-xl capitalize ">
          available Buses in {" "}
          <span className=" font-semibold text-black uppercase">
             <span>{selectedRoute}</span>
          </span>
        </p>
        <div className="w-2/4">
          <Form layout="vertical" className="grid md:grid-cols-2 gap-x-2">
            <Form.Item
              label="Select Region / Terminal"
              className="text-lg font-semibold"
            >
              <Select
                className="w-full h-11 border-2 text-base rounded-lg bg-white text-black"
                placeholder="Pickup Location"
                onChange={handleChange}
                dropdownStyle={{ fontSize: "16px" }}
                bordered={false}
              >
                {routes.map((place, index) => (
                  <Select.Option key={index} value={place.from}>
                    <button className="text-base">{place.from}</button>
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Bus Departure Date"
              className="text-lg font-semibold"
            >
              <DatePicker
                className="h-11 border-2 w-full bg-white text-black"
                placeholder={currentDate.format("ddd Do, MMM YYYY")}
                 disabledDate={disabledDate}
                  format={"ddd Do, MMM YYYY"}
                    value={selectedDate}
                 onChange={handleDateChange}
              />
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="my-10">
        <TripTable routes={routes} />
      </div>
    </div>
  );
};

export default AvailablePath;