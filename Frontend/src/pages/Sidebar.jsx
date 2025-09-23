import { AuthContext } from "../context/AuthContext";
import React, { useContext, useState } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Sidebar = ({ activeComponent, setActiveComponent }) => {
  const { logout } = useContext(AuthContext);
  const MySwal = withReactContent(Swal); // SweetAlert for React

  const menuItems = [
    { name: "dashboard", label: "Dashboard" },
    { name: "projects", label: "Projects" },
    { name: "profile", label: "Profile" },
    { name: "logout", label: "Logout" },
  ];

  const handleLogout = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
      }
    });
  };

  const handleClick = (item) => {
    if (item.name === "logout") {
      handleLogout();
    } else {
      setActiveComponent(item.name);
    }
  };

  return (
    <div className="w-64 bg-white shadow-md h-full p-4 flex flex-col">
      <div className="flex items-center gap-x-2 mb-6">
        <MdDashboardCustomize size={28} className="text-green-500" />
        <p className="text-lg font-bold text-gray-700">My Portfolio</p>
      </div>

      <ul className="space-y-2 flex-1">
        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => handleClick(item)}
            className={`p-2 rounded cursor-pointer transition-colors duration-200 ${
              activeComponent === item.name
                ? "bg-blue-200 text-blue-700"
                : "hover:bg-gray-200"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
