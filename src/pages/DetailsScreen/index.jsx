import React from "react";
import "./styles.css";
import { Form, Input, Button, Select } from "antd";
import HomeLogo from "../../components/HomeLogo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function DetailsScreen() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (formData) => {
    console.log("Details Form Data is", formData);
    axios
      .post("/user/details", formData)
      .then((response) => {
        message.success("Thank you updating your information", [5]);
        navigate("/login");
      })
      .catch((error) => {
        message.error("Something went wrong", [5]);
      });
  };
  return (
    <div className="container">
      <div className="left-container">
        <HomeLogo />
      </div>
      <div className="right-container">
        <div className="details-container">
          <Form
            form={form}
            className="details-box"
            layout="horizontal"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
          >
            <p className="heading">Introduction</p>
            <h3>Let us know more about you...</h3>
            <Form.Item name="name" label="Name">
              <Input />
            </Form.Item>
            <Form.Item name="gender" label="Gender">
              <Select>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="nan">Do not want to disclose</Option>
              </Select>
            </Form.Item>
            <Form.Item name="age" label="Age">
              <Input />
            </Form.Item>
            <Form.Item name="number" label="Contact Number">
              <Input />
            </Form.Item>
            <Form.Item name="address" label="Address">
              <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input.TextArea rows={4} placeHolder="Describe yourself in few sentences."/>
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

export default DetailsScreen;
