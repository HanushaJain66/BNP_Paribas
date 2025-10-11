// src/components/About.jsx
import {
  PieChart,
  TrendingUp,
  BarChart3,
  LineChart,
  ShieldCheck,
  Coins,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br  from-slate-100 via-blue-200 to-indigo-300 py-12 px-6 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-5xl text-center mb-12 mt-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          AI Driven Returns Optimizer
        </h1>
        <p className="text-lg text-gray-600">
          Turn your inputs into a personalized, data-driven portfolio with clear
          growth projections.
        </p>
      </div>

      {/* Objective */}
      <Section title="Objective">
        <p className="text-gray-700 leading-relaxed mb-4">
          Build personalized investment strategies by mapping investor profiles
          to diversified allocations (Equity, Bonds, Gold, Real Estate). Using
          ~50 years of asset returns, our models estimate future growth and
          visualize performance over time.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            Collect amount, tenure, risk profile, SIP/Lumpsum, rebalancing, and
            SWP rules.
          </li>
          <li>Allocate across asset classes based on the chosen risk profile.</li>
          <li>Project returns with supervised ML and show net value curves.</li>
          <li>Support SIP/SWP and periodic rebalancing strategies.</li>
        </ul>
      </Section>

      {/* Features */}
      <div className="max-w-5xl grid md:grid-cols-3 gap-6 mb-10">
        <FeatureCard
          icon={<PieChart className="w-10 h-10 text-indigo-600" />}
          title="Smart Allocation"
          desc="Risk-aware splits across Equity, Bonds, Gold & Real Estate tailored to you."
        />
        <FeatureCard
          icon={<TrendingUp className="w-10 h-10 text-green-600" />}
          title="Dynamic Rebalancing"
          desc="Rules like ‘reduce equity 5% every 2 years’ keep your risk on target."
        />
        <FeatureCard
          icon={<BarChart3 className="w-10 h-10 text-amber-600" />}
          title="Predictive Insights"
          desc="Supervised learning on long-horizon returns to estimate forward performance."
        />
      </div>

      {/* Visualization */}
      <Section title="Visualization & Dashboard">
        <p className="text-gray-700 leading-relaxed">
          See growth projections, drawdowns, and benchmark comparisons (e.g.,
          S&amp;P 500). Tweak risk, allocations, or withdrawal plans and watch
          charts update instantly.
        </p>
        <div className="flex justify-center mt-6">
          <LineChart className="w-16 h-16 text-blue-500" />
        </div>
      </Section>

      {/* Extras */}
      <div className="max-w-5xl grid md:grid-cols-2 gap-6 mb-10">
        <FeatureCard
          icon={<Coins className="w-10 h-10 text-emerald-600" />}
          title="SIP & SWP"
          desc="Systematic investments and withdrawals with monthly/quarterly/yearly cadence."
        />
        <FeatureCard
          icon={<ShieldCheck className="w-10 h-10 text-slate-700" />}
          title="Explainable Risk"
          desc="Alpha, Beta, and Volatility vs. benchmarks—communicated in plain language."
        />
      </div>

      <footer className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} AI Driven Returns Optimizer — Built with
        React & Tailwind.
      </footer>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="max-w-5xl bg-white shadow-lg rounded-2xl p-8 mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
      <div className="flex justify-center mb-3">{icon}</div>
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
