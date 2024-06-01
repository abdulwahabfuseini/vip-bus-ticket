"use client";

import { useState, FormEvent } from "react";
import { Button, Form, Input, Modal } from "antd";
import Image from "next/image";
import axios from "axios";
import PasswordVerification from "./PasswordVerification";

interface PasswordFormData {
  phoneNumber: string;
}

interface RequestPasswordProps {
  closePasswordModal: () => void;
}

const phoneNumberRegex = /^(0(2[3-9]|5[0-9]|24|26|27))[0-9]{7}$/;

const RequestPassword: React.FC<RequestPasswordProps> = ({
  closePasswordModal,
}) => {
  const [formData, setFormData] = useState<PasswordFormData>({
    phoneNumber: "",
  });
  const [form] = Form.useForm();
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("/api/auth/recovery/password", {
        email: formData.phoneNumber,
      });

      if (response.status === 200) {
        setIsModalVisible(true);
        closePasswordModal();
        form.resetFields();
      } else {
        setMessage(response.data.message);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response && err.response.status === 404) {
          setMessage("Email does not exist");
        } else {
          setMessage(
            "Error: Unable to request password. Please try again later."
          );
        }
      } else {
        setMessage("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center mb-3">
        <Image
          src="/images/forgot.png"
          alt="verification"
          width={70}
          height={70}
        />
      </div>

      <h2 className="uppercase font-bold text-center text-xl">
        Forgot Password?
      </h2>

      <p className="text-base font-semibold text-center py-2">
        Enter your phone number below and we will send your password to you
      </p>
      {message && !isModalVisible && (
        <p className="text-center text-red-600 text-lg">{message}</p>
      )}
      <Form form={form} layout="vertical" onSubmitCapture={handleSubmit}>
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
              <span className="flex items-center gap-2 border-r-2 pr-1 mr-1 border-gray-300">
                <Image
                  src="/images/ghana.png"
                  alt="flag"
                  width={30}
                  height={30}
                  objectFit="contain"
                  quality={100}
                />
                +233
              </span>
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
        <Button
          type="primary"
          htmlType="submit"
          disabled={loading}
          className="h-11 text-base font-semibold bg-red-500"
        >
          {loading ? "Requesting Password..." : "Request Password"}
        </Button>
      </Form>
      <Modal
        title="Password Sent"
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        width={300}
        centered
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <PasswordVerification />
      </Modal>
    </div>
  );
};

export default RequestPassword;
