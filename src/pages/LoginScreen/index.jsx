import React, { useState } from "react";
import "./styles.css";
import { Form, Input, Button, message } from "antd";
import HomeLogo from "../../components/HomeLogo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API from "../../apiService";

function LoginScreen() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (formData) => {
    console.log("Login Form Data is", formData);
    API.post("/user/login", formData)
      .then((response) => {
        message.success("Login successful", [5]);
        sessionStorage.setItem("userName", formData.emailOrUsername);
        navigate("/selection");
      })
      .catch((error) => {
        message.error(error.response.data, [5]);
      });
  };
  return (
    <div className="container">
      <div className="left-container">
        <HomeLogo />
      </div>
      <div className="right-container">
        {/* <LoginForm /> */}
        <div className="login-container">
          <Form
            form={form}
            className="login-box"
            layout="horizontal"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
          >
            <p className="heading">Login</p>
            <h4>Sign in to continue your impact</h4>
            <Form.Item
              name="emailOrUsername"
              label="Username"
              rules={[
                { required: true, message: "Please enter your username" },
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
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
            <div className="register">
              <a href="/register">Don't have an account? Register Here</a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
