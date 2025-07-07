// components/Header.jsx
import React from "react";
import { Menu } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Header = ({ onToggleSidebar }) => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow px-4 py-3 flex justify-between items-center sticky top-0 z-20">
      {/* Hamburger for mobile */}
      <button className="md:hidden" onClick={onToggleSidebar}>
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="text-sm text-gray-600">
        {user?.email} ({user?.role})
      </div>
    </header>
  );
};

export default Header;
