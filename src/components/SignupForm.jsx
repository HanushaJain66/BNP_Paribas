import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const SignupForm = () => {
  const navigate = useNavigate();

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
    setFormData((f) => ({ ...f, [name]: value })); // ✅ correct
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: create account (API call)
    navigate("/invest"); // go to investment form
  };

  return (
    <div className="flex justify-center items-center pt-28 min-h-screen bg-transparent">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1c1c1c] text-white border border-gray-700 shadow-2xl rounded-2xl p-8 w-[600px]"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

        <div className="grid grid-cols-2 gap-4">
          <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange}
                 className="p-2 rounded bg-[#2a2a2a] focus:ring-2 focus:ring-indigo-400 placeholder-gray-400" />
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange}
                 className="p-2 rounded bg-[#2a2a2a] focus:ring-2 focus:ring-indigo-400 placeholder-gray-400" />
          <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}
                 className="p-2 rounded bg-[#2a2a2a] focus:ring-2 focus:ring-indigo-400 placeholder-gray-400" />
          <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange}
                 className="p-2 rounded bg-[#2a2a2a] focus:ring-2 focus:ring-indigo-400 placeholder-gray-400" />
          <select name="gender" value={formData.gender} onChange={handleChange}
                  className="p-2 rounded bg-[#2a2a2a] focus:ring-2 focus:ring-indigo-400">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange}
                 className="p-2 rounded bg-[#2a2a2a] focus:ring-2 focus:ring-indigo-400 placeholder-gray-400" />
          <input name="account_details" placeholder="Account Details" value={formData.account_details} onChange={handleChange}
                 className="p-2 rounded bg-[#2a2a2a] focus:ring-2 focus:ring-indigo-400 placeholder-gray-400" />
          <input name="pancard_number" placeholder="Pancard Number" value={formData.pancard_number} onChange={handleChange}
                 className="p-2 rounded bg-[#2a2a2a] focus:ring-2 focus:ring-indigo-400 placeholder-gray-400" />
          <select name="preferred_currency" value={formData.preferred_currency} onChange={handleChange}
                  className="p-2 rounded bg-[#2a2a2a] focus:ring-2 focus:ring-indigo-400">
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
          </select>
          <select name="risk_profile" value={formData.risk_profile} onChange={handleChange}
                  className="p-2 rounded bg-[#2a2a2a] focus:ring-2 focus:ring-indigo-400">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button type="submit" className="mt-6 w-full bg-indigo-500 hover:bg-indigo-600 py-2 rounded-md font-semibold">
          Create Account
        </button>

        <p className="text-center mt-4 text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-400 hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
