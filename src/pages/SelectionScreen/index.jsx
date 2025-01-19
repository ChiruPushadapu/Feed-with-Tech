import React, { useState } from "react";
import "./styles.css";
import { Card, Button, message } from "antd";
import HomeLogo from "../../components/HomeLogo";
import donorLogo from "../../assets/donor.png";
import delivererLogo from "../../assets/deliverer.png";
import locationHelperLogo from "../../assets/locationHelper.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API from "../../apiService";
const { Meta } = Card;

function SelectionScreen() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const getCardStyle = (role) => ({
    border: selectedRole === role ? "2px solid blue" : "1px solid grey",
  });
  const handleNavigation = (role) => {
    if (role === "donor") {
      navigate("/donate");
    } else if (role === "deliverer") {
      navigate("/deliver");
    } else if (role === "helper") {
      navigate("/help");
    } else {
      message.error("Issue in redirecting", [5]);
    }
  };
  const handleSubmit = () => {
    if (selectedRole) {
      const payload = {
        username: sessionStorage.getItem("userName"),
        role: selectedRole,
      };
      API.post("user/roleSelection", payload)
        .then((response) => {
          sessionStorage.setItem("selectedRole", selectedRole);
          handleNavigation(selectedRole);
        })
        .catch((error) => {
          message.error("Failed to submit role");
          handleNavigation(selectedRole);
        });
    } else {
      message.error("Please select a role");
    }
  };
  return (
    <div className="container">
      <div className="left-container">
        <HomeLogo />
      </div>
      <div className="right-container">
        <div className="card-container">
          <p className="card-header">
            Choose how you want to contribute to the cause
          </p>
          <div className="card-grid">
            <Card
              hoverable
              onClick={() => setSelectedRole("donor")}
              cover={<img src={donorLogo} alt="Donor" />}
              style={getCardStyle("donor")}
            >
              <Meta title="Food Donor" />
            </Card>
            <Card
              hoverable
              onClick={() => setSelectedRole("deliverer")}
              cover={<img src={delivererLogo} alt="Deliverer" />}
              style={getCardStyle("deliverer")}
            >
              <Meta title="Food Deliverer" />
            </Card>
            <Card
              hoverable
              onClick={() => setSelectedRole("helper")}
              cover={<img src={locationHelperLogo} alt="Location Helper" />}
              style={getCardStyle("helper")}
            >
              <Meta title="Location Helper" />
            </Card>
          </div>
          <div className="submit-button-container">
            <Button
              className="submit-button"
              type="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectionScreen;
