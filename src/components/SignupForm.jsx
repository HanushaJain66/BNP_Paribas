import { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "male",
    password: "",
    account_details: "",
    pancard_number: "",
    preferred_currency: "USD",
    risk_profile: "medium",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div className="flex justify-center items-start pt-28 pb-10 min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 w-[800px] text-white"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

        {/* Grid layout for 2-column inputs */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 rounded bg-white/20 focus:ring-2 focus:ring-indigo-400 placeholder-gray-200 w-full"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 rounded bg-white/20 focus:ring-2 focus:ring-indigo-400 placeholder-gray-200 w-full"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="p-2 rounded bg-white/20 focus:ring-2 focus:ring-indigo-400 placeholder-gray-200 w-full"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="p-2 rounded bg-white/20 focus:ring-2 focus:ring-indigo-400 placeholder-gray-200 w-full"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="p-2 rounded bg-white/20 focus:ring-2 focus:ring-indigo-400 w-full"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="p-2 rounded bg-white/20 focus:ring-2 focus:ring-indigo-400 placeholder-gray-200 w-full"
          />

          <input
            type="text"
            name="account_details"
            placeholder="Account Details"
            value={formData.account_details}
            onChange={handleChange}
            className="p-2 rounded bg-white/20 focus:ring-2 focus:ring-indigo-400 placeholder-gray-200 w-full"
          />

          <input
            type="text"
            name="pancard_number"
            placeholder="Pancard Number"
            value={formData.pancard_number}
            onChange={handleChange}
            className="p-2 rounded bg-white/20 focus:ring-2 focus:ring-indigo-400 placeholder-gray-200 w-full"
          />

          <div>
            <label className="block text-sm mb-1">Preferred Currency</label>
            <select
              name="preferred_currency"
              value={formData.preferred_currency}
              onChange={handleChange}
              className="p-2 rounded bg-white/20 focus:ring-2 focus:ring-indigo-400 w-full"
            >
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Risk Profile</label>
            <select
              name="risk_profile"
              value={formData.risk_profile}
              onChange={handleChange}
              className="p-2 rounded bg-white/20 focus:ring-2 focus:ring-indigo-400 w-full"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-indigo-500 hover:bg-indigo-600 py-2 rounded-md font-semibold text-white transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
