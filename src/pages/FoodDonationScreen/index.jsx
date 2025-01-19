import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Form,
  Input,
  InputNumber,
  Select,
  DatePicker,
  TimePicker,
  Checkbox,
  Radio,
  Switch,
  Button,
  Steps,
  Card,
} from "antd";
import API from "../../apiService";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
function FoodDonationScreen() {
  const [form] = Form.useForm();
  const onFinish = (formData) => {
    formData.donorEmail = sessionStorage.getItem("userName");
    console.log("Donation Form Data is", formData);
    API.post("/food/add", formData)
      .then((response) => {})
      .catch((error) => {
        message.error("Something went wrong", [5]);
      });
  };
  return (
    <div>
      <Header />
      <div className="donor-container">
        <Form
          form={form}
          layout="horizontal"
          className="donor-box"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.List name="food_details">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <Card
                    key={key}
                    title={`Dish Detail ${key + 1}`}
                    extra={
                      <Button
                        type="link"
                        danger
                        icon={<MinusCircleOutlined />}
                        onClick={() => remove(name)}
                      >
                        Remove
                      </Button>
                    }
                    style={{ marginBottom: 16 }}
                  >
                    <Form.Item
                      {...restField}
                      name="foodType"
                      fieldKey={[fieldKey, "foodType"]}
                      label="Type of food"
                      rules={[
                        {
                          required: true,
                          message: "Please select the type of food",
                        },
                      ]}
                    >
                      <Select>
                        <Option value="Cooked">Cooked</Option>
                        <Option value="Raw">Raw</Option>
                        <Option value="Packaged">Packaged</Option>
                        <Option value="Beverages">Beverages</Option>
                        <Option value="Others">Others</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name="dishName"
                      fieldKey={[fieldKey, "dishName"]}
                      label="Dish Name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter the name of the dish",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name="dishCategory"
                      fieldKey={[fieldKey, "dishCategory"]}
                      label="Category"
                      rules={[
                        {
                          required: true,
                          message: "Please select the category of the dish",
                        },
                      ]}
                    >
                      <Select>
                        <Option value="Veg">Veg</Option>
                        <Option value="Non-Veg">Non-Veg</Option>
                        <Option value="Vegan">Vegan</Option>
                        <Option value="Others">Others</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name="quantity"
                      fieldKey={[fieldKey, "quantity"]}
                      label="Quantity"
                      rules={[
                        {
                          required: true,
                          message: "Please enter the quantity",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name="storageType"
                      fieldKey={[fieldKey, "storageType"]}
                      label="Storage"
                    >
                      <Select>
                        <Option value="Refrigerated">Refrigerated</Option>
                        <Option value="Room temperature">
                          Room temperature
                        </Option>
                        <Option value="Frozen">Frozen</Option>
                        <Option value="Not specified above">
                          Not specified above
                        </Option>
                      </Select>
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name="expiryDate"
                      fieldKey={[fieldKey, "expiryDate"]}
                      label="Expiry Date"
                      rules={[
                        {
                          required: true,
                          message: "Please enter the expiry date",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Card>
                ))}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                    style=""
                  >
                    Add Another Dish
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item>
            <div className="button-container">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default FoodDonationScreen;
