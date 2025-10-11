// src/components/Home.jsx
import { NavLink} from "react-router-dom";
import { TrendingUp, PieChart, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className=" mt-10 min-h-screen bg-gradient-to-br from-slate-100 via-blue-200 to-indigo-300 flex flex-col justify-center items-center text-center px-6 py-12">
      
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      
        <div className="flex-1 text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
            AI Driven <span className="text-indigo-600">Returns Optimizer</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Personalize your investment strategy using Machine Learning,
            LangGraph Agents, and intelligent portfolio rebalancing.
            Optimize your returns—automatically, data-driven, and risk-adjusted.
          </p>

         
          <div className="flex gap-4">
            
            <NavLink
              to="/login"
              className="border bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold active:scale-95  transition"
            >
              Sign Up / Login
            </NavLink>
          </div>
        </div>


        <div className="flex-1 flex justify-center">
          <img
            src="https://thumbs.dreamstime.com/b/return-investment-three-dimensional-illustration-arrows-words-45614893.jpg"
            alt="Investment Analysis"
            className="max-w-md md:max-w-lg rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 max-w-5xl grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<PieChart className="w-8 h-8 text-indigo-600" />}
          title="Smart Portfolio Allocation"
          desc="AI models + LLM agents assign optimal weights to equity, bonds, gold, and real estate."
        />
        <FeatureCard
          icon={<TrendingUp className="w-8 h-8 text-green-600" />}
          title="Predictive Return Simulation"
          desc="Uses long-horizon historical data to project future portfolio value."
        />
        <FeatureCard
          icon={<Shield className="w-8 h-8 text-purple-600" />}
          title="Risk-Aware Optimization"
          desc="Adjusts allocations based on your risk profile and rebalancing preferences."
        />
      </div>

      {/* Footer */}
      <footer className="text-sm text-gray-500 mt-16">
        © {new Date().getFullYear()} AI Driven Returns Optimizer. Built with ❤ using React & Tailwind.
      </footer>
    </div>
  );
}

// Reusable Feature Card
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-sm text-center">{desc}</p>
    </div>
  );
}
