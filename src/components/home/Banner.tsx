"use client";

import { Places } from "@/assets/Place";
import { DatePicker, Select } from "antd";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="w-full h-full py-16 px-3">
      <div className="w-full h-[500px] sm:h-[380px] lg:h-80 relative max-w-7xl rounded-lg text-center px-5 mx-auto grid place-items-center overflow-hidden">
        <Image
          src="/images/vipbus.jpg"
          alt="logo"
          fill
          objectFit="cover"
          loading="lazy"
        />
        <div className="py-10 h-full bg-gray-800 px-3 text-white absolute left-0 right-0 bg-opacity-70">
          <h1
            className="text-2xl sm:text-4xl lg:text-5xl sm:py-6 capitalize font-semibold"
            style={{ height: "80px" }}
          >
            <Typewriter
              words={[
                "Plan Your Trip, Book Your Ticket",
                "Don't miss out! Book your ticket today!",
                "Hit the road with us",
                "Travel Anywhere, Anytime",
                "Book Now, Travel soon",
                "Explore new destinations, effortlessly",
                "Travel made easy, one ticket at a time",
              ]}
              loop={Infinity}
              cursor
              cursorStyle=""
              typeSpeed={80}
              deleteSpeed={50}
            />
          </h1>
          <p className="text-lg sm:text-xl sm:pt-3 font-medium capitalize">
            Book your ticket with V.I.P and enjoy the best trip
          </p>
          <div className="grid sm:grid-cols-2 w-full pt-6 sm:pt-10 gap-x-4 px-8 sm:px-32 gap-y-3 lg:grid-cols-4 py-4">
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
              className="w-full text-white bg-red-500 rounded-sm text-center font-semibold"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
