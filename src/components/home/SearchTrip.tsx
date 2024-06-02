"use client";

import { useEffect, useState } from "react";

import TripResults from "./TripResults";
import { DatePicker, Select } from "antd";
import { Places } from "@/assets/Place";

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
    <div className={`${sticky ? "mx-4" : "w-full h-full px-4 pt-64 sm:pt-16 pb-6 relative"}`}>
      <div
        className={`${
          sticky
            ? "sm:fixed sm:top-16 shadow-lg  sm:left-0 sm:right-0 z-40  sm:mx-0 sm:flex justify-center"
            : "absolute left-0 right-0 w-full px-4 sm:px-6 -top-12 sm:-top-11"
        } sm:max-w-5xl sm:mx-auto`}
      >
        <div className="grid bg-red-500 w-full gap-x-3 p-5 sm:px-[2vw] gap-y-3 sm:grid-cols-4 sm:py-4">
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
            className="w-full text-black bg-white rounded-sm text-center font-semibold"
          >
            Search
          </button>
        </div>
      </div>
      <div className="max-w-7xl bg-red-400 px-4 mx-auto border-2">
        <div>
          {searchResults.length > 0 ? (
            <div>
              <h1 className=" font-medium text-left text-lg sm:text-xl">
                Search Results for{" "}
                <span className="text-xl font-bold">&quot;{search}&quot;</span>
              </h1>
              <div className="">
                {searchResults.map((book, index) => (
                  <TripResults key={index} />
                ))}
              </div>
            </div>
          ) : (
            <p className="text-xl text-left font-semibold py-6">
              Search For a book
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchTrip;
