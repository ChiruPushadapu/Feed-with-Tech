import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./styles.css";
import { Form, Input, Button, Select, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API from "../../apiService";

function LocationHelperScreen() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (formData) => {
    formData.helperEmail = sessionStorage.getItem("userName");
    console.log("Helper Form Data is", formData);
    API.post("/location/add", formData)
      .then((response) => {
        message.success("Location added successfully", [5]);
        navigate("/thank-you");
      })
      .catch((error) => {
        message.error("Something went wrong", [5]);
      });
  };
  return (
    <div>
      <Header />
      <div className="helper-container">
        <Form
          form={form}
          className="helper-box"
          layout="horizontal"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
        >
          <p className="heading">Add Location</p>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Please enter address" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="personCount"
            label="Person count"
            placeholder="Enter an approx number "
            rules={[
              { required: true, message: "Please enter number of persons" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="facilityType"
            label="Facility Type"
            rules={[
              { required: true, message: "Please select type of facility" },
            ]}
          >
            <Select>
              <Option value="Orphanage">Orphanage</Option>
              <Option value="Old Age Home">Old Age Home</Option>
              <Option value="Homeless Shelter">Homeless Shelter</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item name="inChargeName" label="InCharge Name">
            <Input />
          </Form.Item>
          <Form.Item name="inChargeMobile" label="InCharge Mobile Number">
            <Input />
          </Form.Item>
          <Form.Item name="additionalInfo" label="Remarks/Additional Info">
            <Input.TextArea
              rows={4}
              placeholder="Any additional information or remarks"
            />
          </Form.Item>
          <Form.Item>
            <div className="button-container">
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default LocationHelperScreen;
