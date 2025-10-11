import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: validate/authenticate
    navigate("/invest");              // ✅ go to Investment page
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-[#1c1c1c] border border-gray-700 rounded-2xl shadow-2xl p-8 w-96 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email"
            value={formData.email} onChange={handleChange}
            className="w-full p-2 rounded bg-[#2a2a2a] text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400" />
          <input type="password" name="password" placeholder="Password"
            value={formData.password} onChange={handleChange}
            className="w-full p-2 rounded bg-[#2a2a2a] text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400" />
          <button type="submit" className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white font-semibold">
            Login
          </button>
        </form>

        <p className="mt-4 text-gray-400 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-yellow-400 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
