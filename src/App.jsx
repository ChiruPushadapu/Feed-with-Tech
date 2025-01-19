import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SelectionScreen from "./pages/SelectionScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import ForgotPasswordScreen from "./pages/ForgotPasswordScreen";
import DetailsScreen from "./pages/DetailsScreen";
import FoodDonationScreen from "./pages/FoodDonationScreen";
import AvailableLocationsScreen from "./pages/LocationsScreen";
import FoodDeliverScreen from "./pages/FoodDeliverScreen";
import LocationHelperScreen from "./pages/LocationHelperScreen";
import MyAccountScreen from "./pages/MyAccountScreen";
import AboutUsScreen from "./pages/AboutUsScreen";
import FeedbackScreen from "./pages/FeedbackScreen";
import LogoutScreen from "./pages/LogoutScreen";
import ThankYouScreen from "./pages/ThankYouScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={LoginScreen} />
        <Route path="/register" Component={RegisterScreen} />
        <Route path="/forgot-password" Component={ForgotPasswordScreen} />
        <Route path="/selection" exact Component={SelectionScreen} />
        <Route path="/donate" Component={FoodDonationScreen} />
        <Route path="/available-locations" Component={AvailableLocationsScreen} />
        <Route path="/deliver" Component={FoodDeliverScreen} />
        <Route path="/help" Component={LocationHelperScreen} />
        <Route path="/thank-you" Component={ThankYouScreen} />
        <Route path="/details" Component={DetailsScreen} />
        <Route path="/my-account" Component={MyAccountScreen} />
        <Route path="/about-us" Component={AboutUsScreen} />
        <Route path="/feedback" Component={FeedbackScreen} />
        <Route path="/logout" Component={LogoutScreen} />
      </Routes>
    </Router>
  );
}

export default App;
