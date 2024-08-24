import React from "react";
import HeadTitle from "../HeadTitle";

const Hiring = () => {
  return (
    <div>
      <HeadTitle path=" Bus hiring Services" />
      <p className="py-2 text-base lg:w-5/6">
        These Services are designed to cater to various needs and events,
        providing comfortable and reliable transportation solutions to
        individuals and groups.{" "}
        <strong>VIP Jeoun Transport Company Limited</strong> is one of the
        leading transportation in Ghana, with a strong reputation for safety,
        comfort and reliability
      </p>
      <div className="py-4 ">
        <h3 className="font-medium  sm:text-xl">Online Bus Hiring Services:</h3>
        <ul className=" list-inside list-disc py-2 px-6 text-gray-500">
          <li>Conference and Event Transportation</li>
          <li>Airport Transfers</li>
          <li>Wedding Transportation</li>
          <li>Religious Tours</li>
          <li>Tourist Tours</li>
          <li>Music and Cultural Festivals</li>
          <li>Personal Tours</li>
          <li>Political Rallies</li>
          <li>Graduation Ceremonies</li>
          <li>Emergency Transport Services</li>
          <li>Expenditions</li>
          <li>Community Outreach Programs</li>
        </ul>
      </div>
    </div>
  );
};

export default Hiring;
