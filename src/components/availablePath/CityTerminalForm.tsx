"use client";
import React, { useState } from "react";
import { Form, Input, Button, message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

interface TerminalData {
  name: string;
}

interface CityData {
  name: string;
  terminals: TerminalData[];
}

const CityTerminalForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  // const [terminals, setTerminals] = useState<TerminalData[]>([]);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const { cityName, terminalName } = values;
      const cityData: CityData = {
        name: cityName,
        terminals: [{ name: terminalName }], // Directly use terminal name as a single terminal
      };

      const response = await fetch("/api/terminal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cities: [cityData] }),
      });

      if (response.ok) {
        message.success("City and Terminal Created Successfully!");
        form.resetFields();
      } else {
        const errorData = await response.json();
        message.error(
          `Failed to create city and terminal: ${
            errorData?.message ?? "Please check your input"
          }`
        );
      }
    } catch (error) {
      console.error("Error creating city and terminal", error);
      message.error("An error occurred, please try again.");
    } finally {
      setLoading(false);
    }
  };

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
      <h1 className="text-xl font-semibold uppercase text-center py-3">
        Add Station / Terminal
      </h1>
      <Spin spinning={loading} indicator={antIcon}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="text-lg font-semibold"
        >
          <Form.Item
            label="City Name"
            name="cityName"
            rules={[
              {
                required: true,
                message: "Please input City Name",
              },
            ]}
          >
            <Input className="text-base h-11 border-2" />
          </Form.Item>

          <Form.Item
            label="Terminal Name"
            name="terminalName"
            rules={[
              {
                required: true,
                message: "Please Input Terminal Name",
              },
            ]}
          >
            <Input className="text-base h-11 border-2" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="text-lg h-11 bg-red-600"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};

export default CityTerminalForm;