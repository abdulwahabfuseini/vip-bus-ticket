"use client";

import { FormData, ScheduleData, TerminalData } from "@/contexts/Types";
import { Button, Checkbox, Form, Input, Select } from "antd";
import React, { useState, useMemo } from "react";
import moment from "moment";

interface Props {
  from: string;
  to: string;
  price: number;
  time: string;
  date: string;
  terminal: TerminalData;
  schedule: ScheduleData[];
  totalSeats: number; // Added totalSeats prop
}

const TripDetails: React.FC<Props> = ({
  from,
  to,
  schedule,
  date,
  terminal,
  time,
  price,
  totalSeats,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [pickup, sePpickup] = useState({
    location: "",
    channel: "",
    number: "",
    passenger: "",
    emergency: "",
  });

  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [seatDetails, setSeatDetails] = useState<Record<number, any>>({});

  const seatsLayout = useMemo(() => {
    const rows: (number | null)[][] = [];
    const seatsPerRow = totalSeats === 34 ? 4 : 5;
    const nullPosition = totalSeats === 34 ? 2 : 2; // changed this line to get the correct seats layout
    let seatCounter = 1;
    const totalRows = totalSeats === 34 ? 11 : 12; // change this line to get the correct seats layout

    for (let i = 0; i < totalRows; i++) {
      const row: (number | null)[] = [];
      for (let j = 0; j < seatsPerRow; j++) {
        if (
          (j === nullPosition && totalSeats !== 49) ||
          (totalSeats === 49 && j === nullPosition && i < 11)
        ) {
          row.push(null);
        } else if (seatCounter <= totalSeats) {
          row.push(seatCounter++);
        } else {
          row.push(null);
        }
      }
      rows.push(row);
    }

    return rows;
  }, [totalSeats]);

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

  const extractTime = (isoString: string) => {
    const date = moment(isoString);
    const hours = date.format("HH");
    const minutes = date.format("mm");
    return `${hours}:${minutes}`;
  };

  // Robust parsing with a fallback, you can pass in the format that your date string is currently in, for instance if is something like "2024-08-29T20:19:00.000Z" you can pass it "YYYY-MM-DDTHH:mm:ss.SSSZ", and that should fix the invalid date error
  const formattedDate = moment(date, "YYYY-MM-DDTHH:mm:ss.SSSZ").isValid()
    ? moment(date, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("dddd MMM Do, YYYY")
    : moment().format("dddd MMM Do, YYYY");

  // Function to get the first schedule time
  const getFirstScheduleTime = () => {
    if (schedule && schedule.length > 0) {
      return extractTime(schedule[0].time);
    }
    return "N/A";
  };
  console.log("Date Prop:", date);

  return (
    <div>
      <h1 className="text-xl sm:text-4xl capitalize py-6 sm:py-4 sm: font-semibold">
        Book ticket - departure date: <span>{formattedDate}</span>{" "}
        <span>{getFirstScheduleTime()} PM</span>
        <br className="hidden lg:block" />
      </h1>
      <p className="text-2xl font-semibold">Total Fare GHS {price}</p>
      <div className=" sm:border-2 my-6 p-3 sm:p-5 rounded-md h-full grid gap-3 sm:grid-cols-6">
        <div className=" sm:col-span-2 sm:h-[600px] border-2 p-6 rounded-md">
          <div className="flex gap-x-4 sm:gap-x-2 lg:gap-x-4 items-center justify-center flex-wrap">
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
          <div className="grid grid-cols-4 gap-y-2 px-4 lg:px-7 gap-x-1 mt-8">
            {seatsLayout.map((row, rowIndex) =>
              row.map((seatNumber, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className="flex justify-center items-center"
                >
                  {seatNumber ? (
                    <button
                      onClick={() => handleSeatClick(seatNumber)}
                      className={`w-10 h-10 bg-center bg-contain bg-no-repeat relative rounded-md ${
                        selectedSeats.includes(seatNumber)
                          ? "bg-green-600 text-white font-semibold"
                          : "bg-white border border-green-500"
                      }`}
                      style={{
                        backgroundImage: `url('images/seat.png')`,
                      }}
                    >
                      <span
                        className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ${
                          selectedSeats.includes(seatNumber)
                            ? "text-red-600 font-bold"
                            : "text-black"
                        } text-white font-extrabold`}
                      >
                        {seatNumber}
                      </span>
                    </button>
                  ) : (
                    <div className="w-10 h-10"></div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
        <div className=" sm:col-span-4 lg:col-span-3 h-full border-2 rounded-md">
          <h1 className="py-3 px-6 text-base capitalize font-semibold border-b">
            {from} - {to} trip <span>{formattedDate}</span>
          </h1>
          <div className="px-6">
            {schedule?.map((s, index) => (
              <h1 key={index} className=" font-semibold capitalize py-1">
                Time: {extractTime(s.time)} Arrival Time{" "}
                {extractTime(s.arrival)}
              </h1>
            ))}
          </div>

          <div className="p-6">
            <div className=" font-semibold grid gap-3">
              <h1>Selected Seats</h1>
              <p>{selectedSeats.join(", ")}</p>
            </div>
            <Form layout="vertical" className="py-5" form={form}>
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
                  <Select.Option value={terminal.name}>
                    <button className="text-base uppercase">
                      {terminal.name}
                    </button>
                  </Select.Option>
                </Select>
              </Form.Item>
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[1.8px]  bg-gray-100"></span>
                  <h1 className=" font-semibold flex-1 relative ">
                    Payment Info
                  </h1>
                  <span className="h-[1.8px]  bg-gray-100"></span>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 my-2">
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
                      <h1 className="font-semibold capitalize">
                        Enter passenger details for seat no. {seatNumber}
                      </h1>
                      <span className="h-1 bg-gray-100"></span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2 my-2">
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
                disabled={loading}
                loading={loading}
                className="bg-red-500 font-semibold h-10 text-white px-4 rounded"
              >
                {loading ? "Booking..." : "Book Now"}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
