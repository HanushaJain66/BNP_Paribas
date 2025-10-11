// src/components/InvestmentForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DollarSign, Calendar, Shield, LineChart } from "lucide-react";

export default function InvestmentForm() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    amount: "",
    tenureYears: "",
    risk: "medium",
    returnPct: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      amount: values.amount ? Number(values.amount) : 0,
      tenureYears: values.tenureYears ? Number(values.tenureYears) : 0,
      risk: values.risk,
      returnPct: values.returnPct ? Number(values.returnPct) : 0,
    };

    
    navigate("/report", { state: payload });
  };

  return (
    <div className="min-h-screen pt-28 pb-16 bg-gradient-to-b from-slate-100 via-blue-200 to-indigo-300 flex items-start justify-center">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-slate-200 px-8 py-10"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-800">
            Investment Details
          </h2>
          <p className="text-slate-600 mt-2">
            Enter your investment details to generate a customized, AI-driven
            portfolio recommendation.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-600" />
            <input
              name="amount"
              type="number"
              min="0"
              placeholder="e.g. 100000"
              value={values.amount}
              onChange={onChange}
              required
              className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
            <p className="mt-1 text-xs text-slate-500">Investment Amount</p>
          </div>

        
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-600" />
            <input
              name="tenureYears"
              type="number"
              min="1"
              placeholder="e.g. 10"
              value={values.tenureYears}
              onChange={onChange}
              required
              className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
            <p className="mt-1 text-xs text-slate-500">Investment Tenure (Years)</p>
          </div>

     
          <div className="relative">
            <Shield className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-purple-600" />
            <select
              name="risk"
              value={values.risk}
              onChange={onChange}
              className="w-full pl-10 pr-8 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <p className="mt-1 text-xs text-slate-500">Risk Profile</p>
          </div>

        
          <div className="relative">
            <LineChart className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-sky-600" />
            <input
              name="returnPct"
              type="number"
              min="0"
              step="0.1"
              placeholder="e.g. 12"
              value={values.returnPct}
              onChange={onChange}
              className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
            <p className="mt-1 text-xs text-slate-500">Return Expectation (%)</p>
          </div>
        </div>

     
        <button
          type="submit"
          className="mt-8 w-full rounded-xl bg-indigo-600 text-white font-semibold py-3 shadow-md transition hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          Generate Portfolio
        </button>

       
        <p className="text-center text-xs text-slate-400 mt-8">
          © {new Date().getFullYear()} AI Driven Returns Optimizer
        </p>
      </form>
    </div>
  );
}
