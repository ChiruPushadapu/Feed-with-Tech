import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./styles.css";

const getContentByRole = (selectedRole) => {
  if (selectedRole == "donor") {
    return "Thank you";
  } else if (selectedRole == "deliverer") {
    return "Thank you for delivering the food";
  } else if (selectedRole == "helper") {
    return "Thank you for giving us the locations. Our team will review and update them";
  }
};
function ThankYouScreen() {
  const content = getContentByRole(sessionStorage.getItem("selectedRole"));
  return (
    <div>
      <Header />
      {/* Three thank you screens should be rendered in the same screen */}
      {/* Donor: thank you and status tracker */}
      {/* Deliverer: thank you for delivering the food */}
      {/* Helper: thank you for  giving us the locations. Our team will review and update them.*/}
      <div className="thank-you-container">
        <h2>{content}</h2>
      </div>
      <Footer />
    </div>
  );
}

export default ThankYouScreen;
