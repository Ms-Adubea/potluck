// pages/auth/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockLogin } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
// import { mockLogin } from "../../services/authService";
// import { useAuth } from "../../contexts/AuthContext";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await mockLogin(form);
      setUser(res.user);
      navigate(`/dashboard/${res.user.role}`);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input type="email" placeholder="Email" className="mb-2 p-2 w-full border" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input type="password" placeholder="Password" className="mb-4 p-2 w-full border" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
        <p className="text-sm mt-2 text-center">
          Don’t have an account? <a href="/signup" className="text-blue-600">Signup</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
