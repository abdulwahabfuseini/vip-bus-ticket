import React from "react";
import { FareReview } from "./FareReview";
import FareTable from "./FareTable";
import HeadTitle from "../HeadTitle";

const FareLists = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-10 md:py-20  px-4 sm:px-5">
     <HeadTitle path="Fare Review" />
      <div className="grid grid-auto-fit gap-x-10">
        <div className="py-6">
          <h1 className="text-2xl  font-medium">Executive Coaches Fares</h1>
          <div className="py-4">
            <table className="table-auto min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-grey">
                  <th className="px-3 uppercase border-2 text-sm text-darkgrey py-5">
                    Departure
                  </th>
                  <th className="px-3 uppercase border-2 text-sm text-darkgrey py-5">
                    Arrival
                  </th>
                  <th className="px-3 uppercase border-2  text-sm text-darkgrey py-5">
                    Price <br />
                  </th>
                </tr>
              </thead>
              <tbody>
                {FareReview.slice(0, 29).map((fare) => (
                  <tr key={fare.id}>
                    <td className="px-3  text-center text-sm border-2 text-darkgrey py-4">
                      {fare?.from}
                    </td>
                    <td className="px-3  text-center text-sm border-2 text-darkgrey py-4">
                      {fare?.arrival}
                    </td>
                    <td className="px-3  text-center text-sm border-2 text-darkgrey py-4">
                      <span className="font-semibold">₵</span> {fare?.price}.00
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="py-6">
          <h1 className="text-2xl  font-medium">Standard Coaches Fares</h1>
          <div className="py-4">
            <table className="table-auto min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-grey">
                  <th className="px-3  text-center uppercase border-2 text-sm text-darkgrey py-5">
                    Departure
                  </th>
                  <th className="px-3 uppercase border-2   text-center text-sm text-darkgrey py-5">
                    Arrival
                  </th>
                  <th className="px-3 uppercase border-2   text-center text-sm text-darkgrey py-5">
                    Price <br />
                  </th>
                </tr>
              </thead>
              <tbody>
                {FareReview.slice(29, 56).map((fare) => (
                  <tr key={fare.id}>
                    <td className="px-3 text-sm border-2 text-center text-darkgrey py-4">
                      {fare?.from}
                    </td>
                    <td className="px-3 text-sm border-2  text-center text-darkgrey py-4">
                      {fare?.arrival}
                    </td>
                    <td className="px-3 text-sm border-2  text-center text-darkgrey py-4">
                      <span className="font-semibold">₵</span> {fare?.price}.00
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FareLists;
