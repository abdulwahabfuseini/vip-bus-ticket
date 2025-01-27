"use client";
import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  DatePicker,
  TimePicker,
  message,
  InputNumber,
  Spin,
} from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import moment from "moment";
import { nanoid } from "nanoid";
import {
  CityData,
  TerminalData,
  RouteData,
  ScheduleData,
} from "@/contexts/Types";
const { Option } = Select;

interface RouteFormValues {
  city: string;
  terminal: string;
  from: string;
  to: string;
  type: string;
  date: string;
  schedule: any[];
}

const RouteForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState<CityData[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [terminalOptions, setTerminalOptions] = useState<TerminalData[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("/api/terminal");
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setCities(data.data);
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

  const onFinish = async (values: RouteFormValues) => {
    setLoading(true);
    try {
      const selectedTerminal = terminalOptions.find(
          (terminal) => terminal.name === values.terminal
      );

      if (!selectedTerminal) {
        message.error("Invalid terminal selected, Please try again!");
        return;
      }

      const routesWithCorrectFormat: RouteData[] = [
        {
          from: values.from,
          to: values.to,
          type: values.type,
          date: moment(values.date).format("YYYY-MM-DD"),
          schedule:
            values.schedule?.map((s: any): ScheduleData => ({
              id: nanoid(),
              routeId: "",
              time: s.time,
              seats: s.seats === "Standard (49 Seats)" ? 49 : 34,
              price: s.price,
              arrival: s.arrival,
              carNumber: s.carNumber,
            })) || [],
        },
      ];

      const response = await fetch("/api/availableRoutes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          routes: routesWithCorrectFormat,
          terminalId: selectedTerminal.id,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error creating route", errorData);
        message.error(
          `Failed to create route ${
            errorData?.message ?? "Please check your input"
          }`
        );
        return;
      }

      message.success("Routes Created Successfully");
      form.resetFields();
    } catch (error: any) {
      console.error("Error creating routes:", error);
      message.error(
        `Failed to create routes, Please try again. ${error.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (value: string) => {
    setSelectedCity(value);
    form.setFieldsValue({ from: value });
    const city = cities.find((city) => city.name === value);
    if (city) {
      setTerminalOptions(city.terminals);
    } else {
      setTerminalOptions([]);
    }
  };

  const handleToCityChange = (value: string) => {
    // you can set the arrival city here if needed
  };

  const handleTerminalChange = (value: string) => {};

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  return (
    <div>
      <h1 className="text-xl uppercase font-semibold py-3 text-center">
        Add Available Routes
      </h1>
      <Spin spinning={loading} indicator={antIcon}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="text-lg font-semibold"
        >
          <div className="grid sm:grid-cols-3 gap-3">
            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: "Please select a city" }]}
            >
              <Select
                placeholder="Select a city"
                onChange={handleCityChange}
                className="h-11 border-2 border-re text-base rounded-md bg-white text-black"
                bordered={false}
              >
                {cities.map((city) => (
                  <Option key={city.id} value={city.name}>
                    {city.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Terminal"
              name="terminal"
              rules={[{ required: true, message: "Please select a terminal" }]}
            >
              <Select
                placeholder="Select a terminal"
                onChange={handleTerminalChange}
                bordered={false}
                className="h-11 border-2 border-re text-base rounded-md bg-white text-black"
              >
                {terminalOptions.map((terminal) => (
                  <Option key={terminal.id} value={terminal.name}>
                    {terminal.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="From (Departure)"
              name="from"
              rules={[
                {
                  required: true,
                  message: "Please input the depature",
                },
              ]}
            >
              <Input
                className="h-11 text-base border-2 bg-white text-black"
                placeholder="Enter Departure"
                disabled
              />
            </Form.Item>
            <Form.Item
              label="To (Arrival)"
              name="to"
              rules={[
                {
                  required: true,
                  message: "Please input the arrival",
                },
              ]}
            >
              <Select
                placeholder="Select a city"
                onChange={handleToCityChange}
                className="h-11 border-2 border-re text-base rounded-md bg-white text-black"
                bordered={false}
              >
                {cities.reverse().map((city) => (
                  <Option key={city.id} value={city.name}>
                    {city.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Trip Type"
              name="type"
              rules={[
                {
                  required: true,
                  message: "Please select trip type",
                },
              ]}
            >
              <Select
                className="h-11 border-2 border-re rounded-md bg-white text-black"
                bordered={false}
                placeholder="Select Trip Type"
              >
                <Option value="scheduled">Scheduled</Option>
                <Option value="unscheduled">Unscheduled</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Date"
              name="date"
              rules={[
                {
                  required: true,
                  message: "Please select date",
                },
              ]}
            >
              <DatePicker
                format="dddd DD MMM YYYY"
                className="w-full h-11 text-base"
              />
            </Form.Item>
          </div>

          <Form.List name="schedule">
            {(scheduleFields, { add, remove }) => (
              <>
                {scheduleFields.map((scheduleField, scheduleIndex) => (
                  <div
                    key={scheduleField.key}
                    style={{
                      border: "1px solid #ddd",
                      padding: "10px",
                      marginBottom: "10px",
                    }}
                    className="border-2 border-re"
                  >
                    <h4>Schedule {scheduleIndex + 1}</h4>
                    <div className="grid sm:grid-cols-3 gap-x-2">
                      <Form.Item
                        label="Time"
                        name={[scheduleField.name, "time"]}
                        rules={[
                          {
                            required: true,
                            message: "Please select time",
                          },
                        ]}
                      >
                        <TimePicker
                          use12Hours
                          format="h:mmA"
                          className="w-full h-11 text-base"
                        />
                      </Form.Item>
                      <Form.Item
                        label="Bus Capacity (Seats)"
                        name={[scheduleField.name, "seats"]}
                        rules={[
                          {
                            required: true,
                            message: "Please input the number of seats",
                          },
                        ]}
                      >
                        <Select
                          className="h-11 border-2 border-re rounded-md bg-white text-black"
                          bordered={false}
                          placeholder="Select Bus Capacity"
                        >
                          <Option value="Executive (34 Seats)">
                            Executive (34 Seats)
                          </Option>
                          <Option value="Standard (49 Seats)">
                            Standard (49 Seats)
                          </Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        label="Car Number"
                        name={[scheduleField.name, "carNumber"]}
                        rules={[
                          {
                            required: true,
                            message: "Please input the car number",
                          },
                        ]}
                      >
                        <Input
                          className="w-full h-11 text-base"
                          placeholder="Enter Car Number"
                        />
                      </Form.Item>
                      <Form.Item
                        label="Price"
                        name={[scheduleField.name, "price"]}
                        rules={[
                          {
                            required: true,
                            message: "Please input the price",
                          },
                        ]}
                      >
                        <InputNumber
                          className="w-full h-11 text-base"
                          placeholder="Enter Price"
                        />
                      </Form.Item>
                      <Form.Item
                        label="Arrival Time"
                        name={[scheduleField.name, "arrival"]}
                        rules={[
                          {
                            required: true,
                            message: "Please select the arrival time",
                          },
                        ]}
                      >
                        <TimePicker
                          use12Hours
                          format="h:mmA"
                          className="w-full h-11 text-base"
                          placeholder="Select Arrival Time"
                        />
                      </Form.Item>
                    </div>
                    {scheduleFields.length > 1 ? (
                      <Button
                        type="text"
                        danger
                        onClick={() => remove(scheduleField.name)}
                      >
                        Remove Schedule
                      </Button>
                    ) : null}
                  </div>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    className="h-10 font-semibold bg-red-200"
                  >
                    Add Schedule
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="text-lg font-semibold h-11 bg-red-500"
            >
              {loading ? "Creating Route..." : "Create Route"}
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};

export default RouteForm;