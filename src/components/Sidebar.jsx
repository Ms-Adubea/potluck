// components/Sidebar.jsx
import React from "react";
import { getSidebarItems } from "./SidebarMenuItems";
// import { useAuth } from "../contexts/AuthContext";
import { X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { role } = useParams();

  const items = getSidebarItems(user?.role || "");

  const getPath = (label) => {
    switch (label) {
      case "Upload Meal":
      case "Users":
      case "Order Food":
        return "overview";
      case "Orders":
      case "My Orders":
      case "Approve Meals":
        return "orders";
      case "Earnings":
      case "Stock Alerts":
      case "Analytics":
        return "meals";
      default:
        return "overview";
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:block`}
      >
        <div className="flex items-center justify-between p-4 md:hidden">
          <h2 className="text-xl font-bold">Potluck</h2>
          <button onClick={onClose}>
            <X className="text-white w-6 h-6" />
          </button>
        </div>

        <div className="hidden md:flex p-4">
          <h2 className="text-xl font-bold">Potluck</h2>
        </div>

       <nav className="space-y-2 px-4">
        {items.map((label) => (
          <button
            key={label}
            onClick={() => {
              const path = getPath(label);
              navigate(`/dashboard/${role}/${path}`);
              onClose?.(); // close mobile menu
            }}
            className="block w-full text-left hover:bg-gray-700 px-3 py-2 rounded"
          >
            {label}
          </button>
        ))}
      </nav>
      </aside>
    </>
  );
};

export default Sidebar;


