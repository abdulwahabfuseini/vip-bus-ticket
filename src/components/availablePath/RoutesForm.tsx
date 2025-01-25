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
import { Route } from "@/contexts/Types";
const { Option } = Select;

interface FormData {
  city: string;
  terminal: string;
  routes: Route[];
}

const RouteForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState<FormData | null>(null);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedTerminal, setSelectedTerminal] = useState("");

  const onFinish = (values: FormData) => {
    setFormValues(values);
    console.log("Form Values : ", JSON.stringify(values, null, 2));
    message.success("Form data logged successfully!");
    form.resetFields();
  };

  const handleCityChange = (value: string) => {
    setSelectedCity(value);
  };

  const handleTerminalChange = (value: string) => {
    setSelectedTerminal(value);
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
      <h1 className="text-xl uppercase font-semibold py-3 text-center">
        Add Available Route
      </h1>
      <Spin spinning={loading} indicator={antIcon}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="text-lg font-semibold"
        >
          <Form.Item
            label="City"
            name="city"
            className="text-lg font-semibold"
            rules={[{ required: true, message: "Please input the city" }]}
          >
            <Input
              className="h-11 text-base border-2"
              onChange={(e) => handleCityChange(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Terminal"
            name="terminal"
            rules={[{ required: true, message: "Please input the terminal" }]}
          >
            <Input
              className="h-11 text-base border-2"
              onChange={(e) => handleTerminalChange(e.target.value)}
            />
          </Form.Item>

          <Form.List name="routes">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <div
                    key={field.key}
                    style={{
                      border: "1px solid #ccc",
                      padding: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <h3>Route {index + 1}</h3>
                    <Form.Item
                      label="From"
                      name={[field.name, "from"]}
                      rules={[
                        {
                          required: true,
                          message: "Please input the starting point",
                        },
                      ]}
                    >
                      <Input className="h-11 text-base border-2" />
                    </Form.Item>
                    <Form.Item
                      label="To"
                      name={[field.name, "to"]}
                      rules={[
                        {
                          required: true,
                          message: "Please input the destination",
                        },
                      ]}
                    >
                      <Input className="h-11 text-base border-2" />
                    </Form.Item>
                    <Form.Item
                      label="Type"
                      name={[field.name, "type"]}
                      rules={[
                        { required: true, message: "Please select the type" },
                      ]}
                    >
                      <Select>
                        <Option value="scheduled">Scheduled</Option>
                        <Option value="unscheduled">Unscheduled</Option>
                      </Select>
                    </Form.Item>

                    <Form.List name={[field.name, "schedule"]}>
                      {(
                        scheduleFields,
                        { add: addSchedule, remove: removeSchedule }
                      ) => (
                        <>
                          {scheduleFields.map(
                            (scheduleField, scheduleIndex) => (
                              <div
                                key={scheduleField.key}
                                style={{
                                  border: "1px solid #ddd",
                                  padding: "10px",
                                  marginBottom: "10px",
                                }}
                              >
                                <h4>Schedule {scheduleIndex + 1}</h4>
                                <Form.Item
                                  label="Date"
                                  name={[
                                    field.name,
                                    "schedule",
                                    scheduleField.name,
                                    "date",
                                  ]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Please select date",
                                    },
                                  ]}
                                >
                                  <DatePicker format="dddd DDth MMM YYYY" />
                                </Form.Item>
                                <Form.Item
                                  label="Time"
                                  name={[
                                    field.name,
                                    "schedule",
                                    scheduleField.name,
                                    "time",
                                  ]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Please select time",
                                    },
                                  ]}
                                >
                                  <TimePicker use12Hours format="h:mmA" />
                                </Form.Item>
                                {scheduleFields.length > 1 ? (
                                  <Button
                                    type="text"
                                    danger
                                    onClick={() =>
                                      removeSchedule(scheduleField.name)
                                    }
                                  >
                                    Remove Schedule
                                  </Button>
                                ) : null}
                              </div>
                            )
                          )}
                          <Form.Item>
                            <Button
                              type="dashed"
                              onClick={() => addSchedule()}
                              block
                            >
                              Add Schedule
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>

                    <Form.Item
                      label="Price"
                      name={[field.name, "price"]}
                      rules={[
                        { required: true, message: "Please input the price" },
                      ]}
                    >
                      <InputNumber style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item
                      label="Seats"
                      name={[field.name, "seats"]}
                      rules={[
                        {
                          required: true,
                          message: "Please input the number of seats",
                        },
                      ]}
                    >
                      <InputNumber style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item
                      label="Arrival"
                      name={[field.name, "arrival"]}
                      rules={[
                        {
                          required: true,
                          message: "Please select the arrival time",
                        },
                      ]}
                    >
                      <TimePicker use12Hours format="h:mmA" />
                    </Form.Item>

                    {fields.length > 1 ? (
                      <Button
                        type="text"
                        danger
                        onClick={() => remove(field.name)}
                      >
                        Remove Route
                      </Button>
                    ) : null}
                  </div>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block>
                    Add Route
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
              {loading ? "Creating" : "Create Route"}
            </Button>
          </Form.Item>
          {formValues && (
            <pre style={{ marginTop: "20px" }}>
              {JSON.stringify(formValues, null, 2)}
            </pre>
          )}
        </Form>
      </Spin>
    </div>
  );
};

export default RouteForm;
