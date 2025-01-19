import React, { useState } from "react";
import "./styles.css";
import { Form, Input, Button, message } from "antd";
import HomeLogo from "../../components/HomeLogo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API from "../../apiService";

function RegisterScreen() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (formData) => {
    console.log("Register Form Data is", formData);
    API.post("/user/register", formData)
      .then((response) => {
        message.success("Registration successful", [5]);
        navigate("/login");
      })
      .catch((error) => {
        console.log("Error is", error);
        message.error(error.response.data, [5]);
      });
  };
  return (
    <div className="container">
      <div className="left-container">
        <HomeLogo />
      </div>
      <div className="right-container">
        <div className="register-container">
          <Form
            form={form}
            className="register-box"
            layout="horizontal"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
          >
            <p className="heading">Register</p>
            <h4>Join us and start making a difference today</h4>
            <Form.Item
              name="username"
              label="Username"
              rules={[
                { required: true, message: "Please enter your username" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email Id" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="mobile"
              label="Mobile Number"
              rules={[
                { required: true, message: "Please enter your mobile number" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
            <div className="login">
              <a href="/login">Already have an account? Click to Login</a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
