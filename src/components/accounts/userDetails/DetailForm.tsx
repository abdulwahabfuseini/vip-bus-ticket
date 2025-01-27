import React, { useState } from "react";
import { Button, Card, Checkbox, Form, Input, Steps } from "antd";
import { toast } from "react-toastify";
import Image from "next/image";

const phoneNumberRegex = /^(0(2[3-9]|5[0-9]|24|26|27))[0-9]{7}$/;

const DetailForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

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
        toast.success("User Created successfully");
        setUserDetails({
          fullName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        });
        form.resetFields();
      }
    } catch (error) {
      toast.error("Ooop!!! Failed to Create New User");
    }
    setLoading(false);
  };
  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ remember: true }}
        className="pt-4"
      >
        <div className="text-red-500 text-lg text-center">{errors}</div>
        <div className="grid sm:grid-cols-2 gap-x-2">
          <Form.Item
            name="fullName"
            label="Full Name"
            className=" font-semibold text-base"
            rules={[
              {
                required: true,
                message: "Please Enter Full Name",
              },
            ]}
            hasFeedback
          >
            <Input
              type="text"
              placeholder="Enter Full Name"
              className="h-11 cursor-pointer w-full border-2 text-base"
              value={userDetails.fullName}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  fullName: e.target.value,
                })
              }
            />
          </Form.Item>
          {/* <Form.Item
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
              </Form.Item> */}
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
        </div>
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
        <Button
          disabled={loading}
          className=" disabled:cursor-not-allowed bg-red-500 text-lg bg-brown h-10  px-6 hover:ring-2 text-white font-semibold"
        >
          Previous
        </Button>
      </Form>
    </div>
  );
};

export default DetailForm;
