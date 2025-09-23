import React from "react";
import Dashboard from "../pages/Dashboard"
import Projects from "../pages/dashboard/Projects"
import Profile from "../pages/dashboard/Profile";
import Logout from "../pages/dashboard/Logout";
import DashboardPage from "./DashboardPage";

const MainContent = ({ activeComponent }) => {
  switch (activeComponent) {
    case "dashboard":
      return <Dashboard />;
    case "projects":
      return <Projects />;
    case "profile":
      return <Profile />;
    case "logout":
      return <Logout />;
    default:
      return <DashboardPage />;
  }
};

export default MainContent;
