"use client";

import { useEffect, useState } from "react";

import TripResults from "./TripResults";
import { DatePicker, Select } from "antd";
import { Places } from "@/assets/Place";
import Image from "next/image";
import { Routes } from "@/assets/Routes";

const SearchTrip = () => {
  const [sticky, setSticky] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <div
      className={`${
        sticky ? "mx-4" : "w-full h-full px-4 pt-64 sm:pt-16 pb-6 relative"
      }`}
    >
      <div
        className={`${
          sticky
            ? "sm:fixed sm:top-16 shadow-lg w-full bg-black  sm:left-0 sm:right-0 z-40  sm:mx-0"
            : "absolute left-0 right-0 w-full px-4 sm:px-6 -top-12 sm:-top-11"
        } sm:max-w-5xl sm:mx-auto`}
      >
        <div className=" w-fulll relative">
          <Image src="/images/kente3.png" alt="banner" fill objectFit="cover" />
          <div className="grid  gap-x-3 bg-black bg-opacity-75 sm:bg-opacity-40 relative py-7 px-8 sm:px-[2vw] gap-y-3 sm:grid-cols-4 sm:py-4">
            <Select
              className="w-full bg-white rounded-sm"
              defaultValue="Traveling From"
              style={{ height: 52, fontSize: 40, textAlign: "left" }}
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
            <Select
              className="w-full bg-white rounded-sm"
              defaultValue="Traveling To"
              style={{ height: 52, fontSize: 16, textAlign: "left" }}
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
            <DatePicker
              className="w-full text-base rounded-sm"
              style={{ height: 52, fontSize: 16, textAlign: "left" }}
            />
            <button
              style={{ height: 52, fontSize: 18, textAlign: "center" }}
              className="w-full bg-red-500 text-white rounded-sm text-center font-semibold"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${sticky ? " sm:blur-sm" : ""} max-w-7xl mx-auto my-6 sm:my-1`}
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
