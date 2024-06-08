"use client";

import { TicketProps } from "@/contexts/Types";
import { Button, Checkbox, Form, Input, Select } from "antd";
import React, { useState } from "react";

const seatsLayout = [
  [1, 2, null, 3],
  [4, 5, null, 6],
  [7, 8, null, 9],
  [10, 11, null, 12],
  [13, 14, null, 15],
  [16, 17, null, 18],
  [19, 20, null, 21],
  [22, 23, null, 24],
  [25, 26, null, 27],
  [28, 29, 30, 31],
];

const TripDetails = ({
  id,
  departure,
  arrival,
  time,
  seats,
  price,
  date,
  arrivalTime,
  terminal,
}: TicketProps) => {
  const [form] = Form.useForm();
  const [pickup, sePpickup] = useState({
    location: "",
    channel: "",
    number: "",
    passenger: "",
    emergency: "",
  });

  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [seatDetails, setSeatDetails] = useState<Record<number, any>>({});

  const handleSeatClick = (seatNumber: number) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
      setSeatDetails((prev) => {
        const newDetails = { ...prev };
        delete newDetails[seatNumber];
        return newDetails;
      });
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
      setSeatDetails((prev) => ({ ...prev, [seatNumber]: {} }));
    }
  };

  return (
    <div>
      <h1 className="text-xl sm:text-4xl capitalize py-6 sm:py-4 sm: font-semibold">
        Book ticket - departure date: <span>{date} </span>{" "}
        <br className="hidden lg:block" />
        <span>{time} </span> <span className="uppercase">PM</span>
      </h1>
      <p className="text-2xl font-semibold">Total Fare GHS {price}</p>
      <div className=" border-2 my-6 p-5 rounded-md h-full grid gap-3 grid-cols-6">
        <div className=" col-span-2 border-2 p-6 h-full rounded-md">
          <div className="flex gap-x-4 items-center justify-center flex-wrap">
            <div className="flex items-center gap-2">
              <h6 className="w-4 h-4 bg-gray-300"></h6>
              <h1>Booked</h1>
            </div>
            <div className="flex items-center gap-2">
              <h6 className="w-4 h-4 bg-green-700"></h6>
              <h1>Selected</h1>
            </div>
            <div className="flex items-center gap-2">
              <h6 className="w-4 h-4 border border-green-700"></h6>
              <h1>Available</h1>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-y-2 mt-8">
            {seatsLayout.map((row, rowIndex) =>
              row.map((seatNumber, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className="flex justify-center items-center"
                >
                  {seatNumber ? (
                    <button
                      onClick={() => handleSeatClick(seatNumber)}
                      className={` w-10 h-10  border rounded ${
                        selectedSeats.includes(seatNumber)
                          ? "bg-green-800 text-white font-semibold"
                          : "bg-white border-green-700"
                      }`}
                    >
                      {seatNumber}
                    </button>
                  ) : (
                    <div className="w-8 h-8"></div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
        <div className=" col-span-3 h-full border-2 rounded-md">
          <h1 className="py-3 px-6 text-base capitalize font-semibold border-b">
            {departure} - {arrival} trip <span>{date}</span> <span>{time}</span>{" "}
          </h1>
          <div className="p-6">
            <div className=" font-semibold grid gap-3">
              <h1>Selected Seats</h1>
              <p>{selectedSeats.join(", ")}</p>
            </div>
            <Form layout="vertical" className="py-5">
              <Form.Item
                label="Pickup Location"
                name="location"
                rules={[{ required: true, message: "Please Select Location" }]}
              >
                <Select
                  className="w-full sm:w-60 rounded-lg"
                  defaultValue="Pickup Location"
                  style={{ height: 42, fontSize: 16, textAlign: "left" }}
                  // onChange={handleChange}
                  dropdownStyle={{ fontSize: "16px" }}
                >
                  <Select.Option value={terminal}>
                    <button className="text-base uppercase">{terminal}</button>
                  </Select.Option>
                </Select>
              </Form.Item>
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-1  bg-gray-100"></span>
                  <h1 className=" font-semibold">Payment Info</h1>
                  <span className="h-1  bg-gray-100"></span>
                </div>
                <div className="grid grid-cols-2 gap-2 my-2">
                  <Form.Item
                    label="Mobile Money Channel"
                    name="channel"
                    rules={[
                      { required: true, message: "Please Select Channel" },
                    ]}
                  >
                    <Select
                      className="w-full sm:w-60 rounded-lg"
                      defaultValue="Select Mobile Money Channel"
                      style={{ height: 42, fontSize: 16, textAlign: "left" }}
                      // onChange={handleChange}
                      dropdownStyle={{ fontSize: "16px" }}
                    >
                      <Select.Option value={"MTN MOMO"}>
                        <button className="text-base uppercase">
                          MTN MOMO
                        </button>
                      </Select.Option>
                      <Select.Option value={"Vodafone Cash"}>
                        <button className="text-base uppercase">
                          Vodafone Cash
                        </button>
                      </Select.Option>
                      <Select.Option value={"AirtelTigo Money"}>
                        <button className="text-base uppercase">
                          AirtelTigo Money
                        </button>
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Mobile Money Number"
                    name="number"
                    rules={[{ required: true, message: "Please Enter Number" }]}
                  >
                    <Input
                      type="tel"
                      name="number"
                      style={{ height: 42, fontSize: 16, textAlign: "left" }}
                      placeholder="Enter Mobile Money Number"
                    />
                  </Form.Item>
                </div>
                {selectedSeats.map((seatNumber) => (
                  <div key={seatNumber}>
                    <div className="flex items-center gap-3">
                      <span className="h-1 bg-gray-100"></span>
                      <h1 className="font-semibold">
                        Enter passenger details for seat no. {seatNumber}
                      </h1>
                      <span className="h-1 bg-gray-100"></span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 my-2">
                      <Form.Item
                        label="Passenger Phone Number"
                        name={`passenger_${seatNumber}`}
                        rules={[
                          {
                            required: true,
                            message: "Please Enter Number",
                          },
                        ]}
                      >
                        <Input
                          type="tel"
                          name={`passenger_${seatNumber}`}
                          style={{
                            height: 42,
                            fontSize: 16,
                            textAlign: "left",
                          }}
                          placeholder="Phone Number"
                        />
                      </Form.Item>
                      <Form.Item
                        label="Emergency Contact"
                        name={`emergency_${seatNumber}`}
                        rules={[
                          {
                            required: true,
                            message: "Please Enter Contact",
                          },
                        ]}
                      >
                        <Input
                          type="tel"
                          name={`emergency_${seatNumber}`}
                          style={{
                            height: 42,
                            fontSize: 16,
                            textAlign: "left",
                          }}
                          placeholder="Emergency Number"
                        />
                      </Form.Item>
                    </div>
                  </div>
                ))}
                <Form.Item
                  name="agreement"
                  className=" font-semibold text-base"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              "To proceed, You need to agree to our terms and conditions"
                            ),
                    },
                  ]}
                >
                  <Checkbox>
                    By clicking here, I state than I have read, understood and
                    agree to the terms and conditions of{" "}
                    <span className="text-blue-700">
                      VIP Jeoun Transport Company
                    </span>
                  </Checkbox>
                </Form.Item>
              </div>
              <Button
                htmlType="submit"
                type="primary"
                className="bg-red-500 font-semibold h-10 text-white px-4 rounded"
              >
                Book Now
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
