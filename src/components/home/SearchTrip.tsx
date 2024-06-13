"use client";

import { useEffect, useState } from "react";

import TripResults from "./TripResults";
import { Button, DatePicker, Form, Select } from "antd";
import { Places } from "@/assets/Place";
import Image from "next/image";
import { Routes } from "@/assets/Routes";

const SearchTrip = () => {
  const [sticky, setSticky] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [formDetails, setFormDetails] = useState({
    departure: "",
    arrival: "",
    date: "",
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 200 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <div
      className={`${
        sticky ? "mx-4" : "w-full h-full px-4   pt-72 sm:pt-24 pb-6 relative"
      }`}
    >
      <div
        className={`${
          sticky
            ? "sm:fixed sm:top-16 shadow-lg w-full bg-black  sm:left-0 sm:right-0 z-40  sm:mx-0"
            : "absolute left-0 right-0 w-full px-4 sm:px-6 -top-12 sm:-top-20"
        } sm:max-w-6xl sm:mx-auto`}
      >
        <div className=" w-fulll relative rounded-lg overflow-hidden">
          <Image
            src="/images/kente3.png"
            alt="banner"
            fill
            objectFit="cover"
            className=" "
          />
          <div className="bg-black bg-opacity-65 rounded-lg sm:bg-opacity-60 relative py-7 px-8 sm:px-[2vw] sm:py-4">
            <h2 className="text-2xl text-white font-semibold mb-4 font-mono">
              Book Your Bus Ticket
            </h2>
            <Form
              layout="vertical"
              className="grid gap-2 sm:grid-cols-4 sm:place-content-center items-center"
            >
              <div className=" sm:col-span-2 relative grid sm:grid-cols-2">
                <Form.Item
                  name="departure"
                  className="text-xl font-semibold"
                  rules={[
                    {
                      required: true,
                      message: "Please Departure Field is Required ",
                    },
                  ]}
                >
                  <Select
                    className="w-full custom-select relative bg-white border-2  sm:rounded-tl-md rounded-md sm:rounded-none sm:rounded-bl-md"
                    defaultValue="Traveling From"
                    style={{ height: 48, fontSize: 40, textAlign: "left" }}
                    // onChange={handleChange}
                    dropdownStyle={{ fontSize: "16px" }}
                    bordered={false}
                  >
                    {Places.reverse().map((place, index) => (
                      <Select.Option key={index} value={place.from}>
                        <button className="text-base">{place.from}</button>
                      </Select.Option>
                    ))}
                  </Select>
                  <Image
                    src="/images/switch.png"
                    alt="switch"
                    width={38}
                    height={38}
                    objectFit="contain"
                    className="absolute sm:top-2 right-0 border-2 border-red-600 sm:border-none rounded-full p-1 -bottom-8 sm:bottom-0  rotate-90 sm:rotate-180  sm:-right-4 z-20"
                  />
                </Form.Item>
                <Form.Item
                  name="arrival"
                  className="text-xl font-semibold"
                  rules={[
                    {
                      required: true,
                      message: "Please Arrival Field is Required ",
                    },
                  ]}
                >
                  <Select
                    className="w-full custom-select px-2 bg-white border-2 rounded-md sm:rounded-none sm:border-l-0 sm:border-t-2 sm:border-r-2 sm:border-b-2 sm:rounded-tr-md sm:rounded-br-md"
                    defaultValue="Traveling To"
                    style={{ height: 48, fontSize: 16, textAlign: "left" }}
                    // onChange={handleChange}
                    dropdownStyle={{ fontSize: "16px" }}
                    bordered={false}
                  >
                    {Places.map((place) => (
                      <Select.Option key={place.id} value={place.from}>
                        <button className="text-base">{place.from}</button>
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
              <Form.Item
                name="date"
                className="text-xl font-semibold"
                rules={[
                  {
                    required: true,
                    message: "Please Date Field is Required ",
                  },
                ]}
              >
                <DatePicker
                  className="w-full text-base border-2 border-gray-200"
                  style={{ height: 48, fontSize: 16, textAlign: "left" }}
                />
              </Form.Item>
              <Button
                style={{ height: 48 }}
                htmlType="submit"
                type="primary"
                className="w-full sm:-mt-6 items-center bg-red-500 font-semibold text-lg text-white px-4"
              >
                Search Bus
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <div
        className={`${
          sticky ? " sm:blur-sm" : ""
        } max-w-7xl mx-auto my-6 sm:my-1`}
      >
        {/* <div>
          {searchResults.length > 0 ? (
            <div>
              <h1 className=" font-medium text-left text-lg sm:text-xl">
                Search Results for <span></span>
                <span className="text-xl font-bold">&quot;{search}&quot;</span>
              </h1>
              <div className=""> */}
        {Routes.slice(0, 1).map((route, index) => (
          <TripResults
            key={index}
            departure={route.departure}
            arrival={route?.arrival}
            price={route.price}
            ticket={route.ticket}
            time={route.time}
            terminal={route.terminal}
          />
        ))}
        {/* </div>
            </div>
          ) : (
            <p className="text-xl text-left font-semibold py-6">
              Search For a route
            </p>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default SearchTrip;
