"use client";

import {
  Button,
  Form,
  Input,
  Steps,
  DatePicker,
  TimePicker,
  Select,
  Modal,
} from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import type { DatePickerProps } from "antd";
import type { Dayjs } from "dayjs";
import TextArea from "antd/es/input/TextArea";
import IsHired from "./IsHired";

const { Step } = Steps;

const { RangePicker } = DatePicker;

type RangeValue = [Dayjs | null, Dayjs | null] | null;

const phoneNumberRegex = /^(0(2[3-9]|5[0-9]|24|26|27))[0-9]{7}$/;

const HireForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<RangeValue>(null);
  const [hiringDetails, setHiringDetails] = useState({
    company: "",
    time: "",
    duration: "",
    address: "",
    pickup: "",
    destination: "",
    typeofbus: "",
    phoneNumber: "",
    email: "",
    buses: "",
    purpose: "",
  });

  const disabledDate: DatePickerProps["disabledDate"] = (current, { from }) => {
    if (from) {
      return Math.abs(current.diff(from, "days")) >= 7;
    }

    return false;
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hiringDetails),
      });

      if (!response.ok) {
        toast.error("Failed to hire a bus");
      }

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Bus Hired Successfully");
        setHiringDetails({
          company: "",
          time: "",
          duration: "",
          pickup: "",
          destination: "",
          address: "",
          typeofbus: "",
          phoneNumber: "",
          email: "",
          buses: "",
          purpose: "",
        });
        form.resetFields();
        setCurrentStep(0);
        setSuccessModalVisible(true);
      }
    } catch (error) {
      toast.error("Ooop!!! Something went wrong. Please try again");
    }
    setLoading(false);
  };

  return (
    <div className="px-3 sm:px-1">
      <h1 className="text-3xl text-center uppercase">Hire a bus</h1>
      <div className="hidden md:block pt-2">
        <Steps current={currentStep}>
          <Step title="Hiring Details" />
          <Step title="Contact Details" />
        </Steps>
      </div>
      <div className="py-4">
        <Form
          form={form}
          layout="vertical"
          onFinish={currentStep === 0 ? handleNextStep : handleSubmit}
        >
          <div>
            {currentStep === 0 && (
              <div className="grid sm:grid-cols-2 gap-x-3">
                <Form.Item
                  name="pickup"
                  label="Pickup Location"
                  className="text-lg font-semibold"
                  rules={[
                    { required: true, message: "Please Field is required" },
                  ]}
                >
                  <Input
                    type="text"
                    name="pickup"
                    placeholder="Enter Pickup Location"
                    className="h-11 text-base "
                    value={hiringDetails.pickup}
                    onChange={(e) =>
                      setHiringDetails({
                        ...hiringDetails,
                        pickup: e.target.value,
                      })
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="destination"
                  label="Destination"
                  className="text-lg font-semibold"
                  rules={[
                    { required: true, message: "Please Field is required" },
                  ]}
                >
                  <Input
                    type="text"
                    name="destination"
                    placeholder="Enter Destination"
                    className="h-11 text-base "
                    value={hiringDetails.destination}
                    onChange={(e) =>
                      setHiringDetails({
                        ...hiringDetails,
                        destination: e.target.value,
                      })
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="duration"
                  label="Duration"
                  className="text-lg font-semibold"
                  rules={[
                    { required: true, message: "Please Field is required" },
                  ]}
                >
                  <RangePicker
                    value={value}
                    disabledDate={disabledDate}
                    style={{ width: "100%", fontSize: 16 }}
                    popupClassName="text-base"
                    onChange={setValue}
                    className=" h-12 text-base w-full"
                  />
                </Form.Item>
                <Form.Item
                  name="time"
                  label="Pickup Time"
                  className="text-lg font-semibold"
                  rules={[
                    { required: true, message: "Please Field is required" },
                  ]}
                >
                  <TimePicker
                    type="text"
                    name="time"
                    className="h-12 w-full text-base"
                  />
                </Form.Item>
                <Form.Item
                  name="typeofbus"
                  label="Type of Bus"
                  className="text-lg font-semibold"
                  rules={[
                    { required: true, message: "Please Field is required" },
                  ]}
                >
                  <Select
                    className="w-full h-12"
                    defaultValue="Select Bus Type"
                    style={{ fontSize: 16, textAlign: "left" }}
                    // onChange={handleChange}
                    dropdownStyle={{ fontSize: "16px" }}
                  >
                    <Select.Option value="Executive Coaches ">
                      <button className="text-base">Executive Coaches</button>
                    </Select.Option>
                    <Select.Option value="Standard Coaches ">
                      <button className="text-base">Standard Coaches</button>
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="buses"
                  label="Number of Buses"
                  className="text-lg font-semibold"
                  rules={[
                    { required: true, message: "Please Field is required" },
                  ]}
                >
                  <Input
                    type="text"
                    name="buses"
                    placeholder="Enter Number of Buses"
                    className="h-12 text-base "
                    value={hiringDetails.buses}
                    onChange={(e) =>
                      setHiringDetails({
                        ...hiringDetails,
                        buses: e.target.value,
                      })
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="purpose"
                  label="Purpose"
                  className="text-lg font-semibold sm:col-span-2"
                  rules={[
                    { required: true, message: "Please Field is required" },
                  ]}
                >
                  <TextArea
                    name="purpose"
                    placeholder="Purpose of Hiring"
                    className="h-11 text-base "
                    value={hiringDetails.purpose}
                    onChange={(e) =>
                      setHiringDetails({
                        ...hiringDetails,
                        purpose: e.target.value,
                      })
                    }
                  />
                </Form.Item>
              </div>
            )}
          </div>
          <div>
            {currentStep === 1 && (
              <div className="grid sm:grid-cols-2 gap-x-3">
                <Form.Item
                  name="company"
                  label="Name/Company"
                  className="text-lg font-semibold"
                  rules={[
                    { required: true, message: "Please Field is required" },
                  ]}
                >
                  <Input
                    type="text"
                    name="company"
                    placeholder="Enter Name/ Company"
                    className="h-11 text-base "
                    value={hiringDetails.company}
                    onChange={(e) =>
                      setHiringDetails({
                        ...hiringDetails,
                        company: e.target.value,
                      })
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="phoneNumber"
                  label="Phone Number"
                  className="text-lg font-semibold"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Phone Number",
                    },
                    {
                      pattern: phoneNumberRegex,
                      message: "Please enter a valid phone number",
                    },
                  ]}
                >
                  <Input
                    type="tel"
                    prefix={
                      <button className="flex items-center gap-2 border-r-2 pr-1 mr-1 border-gray-300">
                        <Image
                          src="/images/ghana.png"
                          alt="flag"
                          width={30}
                          height={30}
                          objectFit="contain"
                          quality={100}
                        />
                        +233
                      </button>
                    }
                    name="phoneNumber"
                    placeholder="000-000-0000"
                    className="h-11 cursor-pointer border-2 w-full text-base"
                    maxLength={10}
                    pattern="[0-9]*"
                    value={hiringDetails.phoneNumber}
                    onChange={(e) => {
                      const value = (e.target as HTMLInputElement).value;
                      if (/^\d*$/.test(value) && value.length <= 10) {
                        setHiringDetails({
                          ...hiringDetails,
                          phoneNumber: value,
                        });
                      }
                    }}
                    onInput={(e) => {
                      const input = e.target as HTMLInputElement;
                      if (input.value.length > 10) {
                        input.value = input.value.slice(0, 10);
                      }
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email Address"
                  className="text-lg font-semibold"
                  rules={[
                    { required: true, message: "Please Field is required" },
                    { type: "email" },
                  ]}
                >
                  <Input
                    type="email"
                    name="email"
                    placeholder="Eg: myname@gmail.com"
                    className="h-11 text-base "
                    value={hiringDetails.email}
                    onChange={(e) =>
                      setHiringDetails({
                        ...hiringDetails,
                        email: e.target.value,
                      })
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="address"
                  label="Address"
                  className="text-lg font-semibold"
                  rules={[
                    { required: true, message: "Please Field is required" },
                  ]}
                >
                  <Input
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                    className="h-11 text-base "
                    value={hiringDetails.address}
                    onChange={(e) =>
                      setHiringDetails({
                        ...hiringDetails,
                        address: e.target.value,
                      })
                    }
                  />
                </Form.Item>
              </div>
            )}
          </div>
          <div className="flex sm:items-center justify-between flex-col sm:flex-row gap-x-8">
            {currentStep > 0 && (
              <Button
                onClick={handlePreviousStep}
                disabled={loading}
                className=" disabled:cursor-not-allowed bg-red-500 text-lg bg-brown h-10  px-6 hover:ring-2 text-white font-semibold"
              >
                Previous
              </Button>
            )}
            <Button
              disabled={loading}
              loading={loading}
              htmlType="submit"
              type="primary"
              className=" disabled:cursor-not-allowed bg-red-500 text-lg bg-brown h-10  px-6 hover:ring-2 text-white font-semibold"
            >
              {currentStep === 0 ? (
                "Next"
              ) : (
                <span>{loading ? "Submiting..." : "Submit"}</span>
              )}
            </Button>
          </div>
        </Form>
        <Modal
          title="Credentials Sent"
          open={successModalVisible}
          onOk={() => setSuccessModalVisible(false)}
          onCancel={() => setSuccessModalVisible(false)}
          width={300}
          centered
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <IsHired />
        </Modal>
      </div>
    </div>
  );
};

export default HireForm;
