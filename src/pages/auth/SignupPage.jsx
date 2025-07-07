// pages/auth/SignupPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../routes/Roles";
import { mockRegister } from "../../services/authService";
// import { mockRegister } from "../../services/authService";
// import { ROLES } from "../../constants/roles";

const SignupPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: ROLES.POTLUCKY,
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mockRegister(form);
      alert("Registered successfully!");
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Signup</h2>
        <input type="email" placeholder="Email" className="mb-2 p-2 w-full border" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input type="password" placeholder="Password" className="mb-2 p-2 w-full border" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <select className="mb-4 p-2 w-full border" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
          {Object.values(ROLES).map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Signup</button>
        <p className="text-sm mt-2 text-center">
          Already have an account? <a href="/" className="text-blue-600">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
