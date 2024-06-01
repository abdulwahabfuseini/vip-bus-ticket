"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button, Card, Form, Input, Modal } from "antd";
import { toast } from "react-toastify";
import HeadLogo from "../HeadLogo";
import RequestPassword from "../RequestPassword";
import Link from "next/link";
import Image from "next/image";

const phoneNumberRegex = /^(0(2[3-9]|5[0-9]|24|26|27))[0-9]{7}$/;

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [userDetails, setUserDetails] = useState({
    phoneNumber: "",
    password: "",
  });

  const [openModalPassword, setOpenModalPassword] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    signIn("credentials", { ...userDetails, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback.error);
          setErrors(callback.error);
        }
        if (callback?.ok || !callback?.error) {
          toast.success("Logged In Successfully", {
            position: "top-right",
          });
        }
        setLoading(false);
      })
      .catch(() => {
        toast.error("Oooops!!! Failed to Login");
      });
  };

  const closePasswordModal = () => {
    setOpenModalPassword(false);
  };

  return (
    <div className="pt-8 w-full">
      <Card className="w-full border border-red-300 mx-auto  rounded-lg bg-white">
        <div className="-top-0 left-0 right-0 absolute grid place-content-center place-items-center">
          <HeadLogo />
        </div>

        <Form
          onFinish={handleLogin}
          initialValues={{ remember: true }}
          className="pt-10"
          layout="vertical"
        >
          <header className="pt-1 font-semibold capitalize text-xl text-center">
            Sign in to your account
          </header>
          <h1 className="text-red-600 text-lg text-center mb-2">{errors}</h1>
          <div>
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
            <Form.Item
              name="password"
              label="Password"
              className=" font-semibold text-base"
              rules={[
                {
                  required: true,
                  message: "Please Enter Password",
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
            <div>
              <button
                onClick={() => setOpenModalPassword(true)}
                className="hover:underline text-gray mb-2 text-red-500 text-base hover:text-blue-500 cursor-pointer"
              >
                Forget password?
              </button>
              <Modal
                open={openModalPassword}
                onOk={() => setOpenModalPassword(false)}
                onCancel={() => setOpenModalPassword(false)}
                width={400}
                centered
                footer={null}
              >
                <RequestPassword closePasswordModal={closePasswordModal} />
              </Modal>
            </div>
            <Button
              htmlType="submit"
              disabled={loading}
              loading={loading}
              type="primary"
              className="bg-red-500 text-white mt-2  h-10 text-lg px-5"
            >
              {loading ? "Please Wait..." : "Login"}
            </Button>
          </div>
        </Form>
      </Card>
      <button className="text-base text-center text-gray-400 w-full py-2">
        Don&apos;t Have an account yet?{" "}
        <Link href="/signup">
          <span className="text-black font-semibold hover:underline hover:text-green-500">
            Signup
          </span>
        </Link>
      </button>
    </div>
  );
};

export default LoginForm;
