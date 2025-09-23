// src/components/DashboardTopBar.jsx
import React, { useContext, useState } from "react";
import { FaBell, FaUser, FaEnvelope } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

const DashboardTopBar = () => {
  const { user } = useContext(AuthContext); // Get logged-in user
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  return (
    <div className="bg-gray-100 shadow-sm py-3 px-6 flex items-center justify-between">
      {/* Left: Greeting */}
      <div className="flex items-center gap-3">
        <span className="text-gray-600 font-semibold">
          Hello, {user?.username || "User"}!
        </span>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-x-4">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            className="text-gray-600 hover:text-gray-800 transition"
          >
            <FaBell size={20} />
          </button>
          {isNotifOpen && (
            <div className="absolute right-0 top-2  w-56 bg-white shadow-lg rounded-lg border border-gray-200 p-3 z-50">
              <p className="text-gray-600 text-sm">No new notifications</p>
            </div>
          )}
        </div>

        {/* Messages (optional) */}
        <button className="text-gray-600 hover:text-gray-800 transition">
          <FaEnvelope size={20} />
        </button>

        {/* User profile */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <FaUser className="text-gray-600" />
          </div>
          <span className="hidden md:inline font-medium text-gray-700">
            {user?.username || "User"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopBar;
