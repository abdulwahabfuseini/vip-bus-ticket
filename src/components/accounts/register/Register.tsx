"use client";

import { useState } from "react";
import { Button, Card, Checkbox, Form, Input, Steps } from "antd";
import { toast } from "react-toastify";
import { FaFlag } from "react-icons/fa";
import HeadLogo from "../HeadLogo";
import Link from "next/link";
import Image from "next/image";

const { Step } = Steps;

const phoneNumberRegex = /^(0(2[3-9]|5[0-9]|24|26|27))[0-9]{7}$/;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [form] = Form.useForm();
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        body: JSON.stringify(userDetails),
      });

      if (!response.ok) {
        setErrors("User Already Exists, Please Create New User");
        toast.error("User Already Exists, Please Create New User");
      }

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("User Created successfully");
        setUserDetails({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        });
        form.resetFields();
        setCurrentStep(0);
      }
    } catch (error) {
      toast.error("Ooop!!! Failed to Create New User");
    }
    setLoading(false);
  };

  return (
    <div className="">
      <Card className="w-full border border-red-300 mx-auto  rounded-lg bg-white">
        <div className="-top-0 left-0 right-0 absolute grid place-content-center place-items-center">
          <HeadLogo />
        </div>
        <Form
          form={form}
          layout="vertical"
          onFinish={currentStep === 0 ? handleNextStep : handleSubmit}
          initialValues={{ remember: true }}
          className="pt-10"
        >
          <header className="text-xl md:text-2xl  mb-4 font-semibold text-center">
            New Here! <br />{" "}
            <span className="text-xl capitalize font-medium">
              Sign up for an account
            </span>
          </header>
          <div className="hidden md:block py-4">
            <Steps current={currentStep}>
              <Step title="Personal Details" />
              <Step title="Verification" />
            </Steps>
          </div>
          <div className="text-red-500 text-lg text-center">{errors}</div>
          {currentStep === 0 && (
            <>
              <div className="grid md:grid-cols-2 gap-x-2">
                <Form.Item
                  name="firstName"
                  label="FirstName"
                  className=" font-semibold text-base"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter FirstName",
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    type="text"
                    placeholder="Enter FirstName"
                    className="h-11 cursor-pointer w-full border-2 text-base"
                    value={userDetails.firstName}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        firstName: e.target.value,
                      })
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  label="LastName"
                  className=" font-semibold text-base"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter LastName",
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Enter LastName"
                    className="h-11 cursor-pointer w-full border-2 text-base"
                    value={userDetails.lastName}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        lastName: e.target.value,
                      })
                    }
                  />
                </Form.Item>
              </div>
              <Form.Item
                name="phoneNumber"
                label="Phone Number"
                className="font-semibold text-base"
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
                hasFeedback
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
                  value={userDetails.phoneNumber}
                  onChange={(e) => {
                    const value = (e.target as HTMLInputElement).value;
                    if (/^\d*$/.test(value) && value.length <= 10) {
                      setUserDetails({
                        ...userDetails,
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
            </>
          )}

          {currentStep === 1 && (
            <div>
              <Form.Item
                name="email"
                label="Email"
                className="font-semibold text-base"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Email",
                  },

                  { type: "email" },
                ]}
                hasFeedback
              >
                <Input
                  type="email"
                  placeholder="Enter Email"
                  className="h-11 cursor-pointer w-full border-2 text-base"
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      email: e.target.value,
                    })
                  }
                />
              </Form.Item>
              <div className="grid grid-cols-2 gap-x-2">
                <Form.Item
                  name="password"
                  label="Password"
                  className=" font-semibold text-base"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Password",
                    },
                    {
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one of the following special characters: @$!%*?&",
                    },
                    {
                      min: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    type="password"
                    placeholder="Enter Password"
                    className="h-11 cursor-pointer w-full border-2 text-base"
                    value={userDetails.password}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        password: e.target.value,
                      })
                    }
                  />
                </Form.Item>
                <Form.Item
                  label="Confirm Password"
                  name="ConfirmPassword"
                  className=" font-semibold text-base"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "Please Confirm Password",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject("Password doesn't match");
                      },
                    }),
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    type="password"
                    placeholder="Confirm Password"
                    className="h-11 cursor-pointer w-full border-2 text-base"
                  />
                </Form.Item>
              </div>

              <Form.Item
                name="agreement"
                className=" font-semibold text-base"
                wrapperCol={{ span: 24 }}
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
                  Agree to our{" "}
                  <a className="no-underline " href="/">
                    Terms and Conditions
                  </a>
                </Checkbox>
              </Form.Item>
            </div>
          )}

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
                <span>{loading ? "Creating User..." : "Create User"}</span>
              )}
            </Button>
          </div>
        </Form>
      </Card>
      <button className="w-full text-base pt-2 text-gray-400">
        Already have an acoount?{" "}
        <Link href="/signin">
          <span className="font-semibold text-black hover:underline hover:text-green-500">
            Signin
          </span>
        </Link>
      </button>
    </div>
  );
};

export default Register;
