"use client";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const phoneNumberRegex = /^(0(2[3-9]|5[0-9]|24|26|27))[0-9]{7}$/;

const ContactForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = () => {
    setLoading(true);
    emailjs
      .send(
        "service_mon6fae",
        "template_42kwqac",
        {
          name: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          message: formData.message,
        },
        "9vSC2INYrwofrkKDo"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thanks for your message, I will get back to you as soon as possible. Stay Bless!!!"
          );
          setFormData({
            fullName: "",
            email: "",
            phoneNumber: "",
            message: "",
          });
          form.resetFields();
        },
        (error) => {
          setLoading(false);
          alert("oops!!! Something went wrong");
        }
      );
  };
  return (
    <div className="p-4 sm:w-96">
      <h1 className="text-2xl font-bold text-center sm:text-3xl pb-3 capitalize">
        Leave a Message
      </h1>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="company"
          label="Name / Company"
          className="text-lg font-semibold"
          rules={[{ required: true, message: "Please Field is required" }]}
        >
          <Input
            type="text"
            name="company"
            placeholder="Enter Name / Company"
            className="h-11 text-base"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({
                ...formData,
                fullName: e.target.value,
              })
            }
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
            className="h-11 text-base"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
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
              <button className="flex items-center gap-2 border-r-2 pr-1.5 mr-1 border-gray-300">
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
            value={formData.phoneNumber}
            onChange={(e) => {
              const value = (e.target as HTMLInputElement).value;
              if (/^\d*$/.test(value) && value.length <= 10) {
                setFormData({
                  ...formData,
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
          name="message"
          label="Message"
          className="text-lg font-semibold"
          rules={[{ required: true, message: "Please Field is required" }]}
        >
          <TextArea
            name="message"
            placeholder="Enter Message"
            className="h-11 text-base "
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
          />
        </Form.Item>
        <Button
          disabled={loading}
          loading={loading}
          htmlType="submit"
          type="primary"
          className=" disabled:cursor-not-allowed bg-red-500 text-lg bg-brown h-10  px-6 hover:ring-2 text-white font-semibold"
        >
          <span>{loading ? "Submiting..." : "Submit"}</span>
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
