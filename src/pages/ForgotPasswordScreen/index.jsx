import React from "react";
import "./styles.css";
import HomeLogo from "../../components/HomeLogo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";

function ForgotPasswordScreen() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (formData) => {
    console.log("Forgot Password Form Data is", formData);
    axios
      .post("/user/forgot-password", formData)
      .then((response) => {
        message.success(
          "An email was sent your email. Please follow those steps and reset your password.",
          [5]
        );
        navigate("/login");
      })
      .catch((error) => {
        message.error("Please try again after some time", [5]);
      });
  };
  return (
    <div className="container">
      <div className="left-container">
        <HomeLogo />
      </div>
      <div className="right-container">
        {/* <ForgotPasswordForm /> */}
        <div className="forgot-password-container">
          <Form
            form={form}
            className="forgot-password-box"
            layout="horizontal"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
          >
            <p className="heading">Forgot your Password?</p>
            <h4>Retrieve your access and continue helping</h4>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordScreen;
