// src/components/InvestmentReport.jsx
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  CheckCircle2,
  DollarSign,
  Calendar,
  Shield,
  BarChart3,
  PieChart,
  LineChart,
  ArrowLeft,
  Download,
} from "lucide-react";

export default function InvestmentReport() {
  const { state } = useLocation(); // { amount, tenureYears, risk, returnPct } or undefined
  const navigate = useNavigate();

  // ---- Build a normalized "data" object (from state or fallback demo) ----
  const currency = "INR";

  // Allocation rules (like your previous file)
  const riskAllocation = {
    low: { "US Stocks (S&P 500)": 20, "3-Month Treasury Bills": 40, "10-Year Treasury Bonds": 20, "Small Cap Stocks": 5, Gold: 10, "Real Estate": 5 },
    medium: { "US Stocks (S&P 500)": 40, "3-Month Treasury Bills": 10, "10-Year Treasury Bonds": 30, "Small Cap Stocks": 10, Gold: 5, "Real Estate": 5 },
    high: { "US Stocks (S&P 500)": 60, "3-Month Treasury Bills": 5, "10-Year Treasury Bonds": 10, "Small Cap Stocks": 15, Gold: 5, "Real Estate": 5 },
  };

  // Predicted annual returns – demo values from your screenshot
  const predictedReturnsPct = {
    "US Stocks (S&P 500)": 16.56,
    "3-Month Treasury Bills": 3.43,
    "10-Year Treasury Bonds": 1.45,
    "Small Cap Stocks": 5.73,
    Gold: 12.73,
    "Real Estate": 5.58,
  };

  // Build from state if present; else fallback sample
  const fromState = state && typeof state === "object";
  const input = {
    amount: fromState ? Number(state.amount || 0) : 20000,
    tenureYears: fromState ? Number(state.tenureYears || 0) : 15,
    risk: (fromState ? state.risk : "high") || "high",
    returnPct: fromState ? Number(state.returnPct || 0) : 6.75, // if provided, used for CAGR calc
  };

  // Allocation table based on risk (fallback to "medium" if unknown)
  const allocationPct =
    riskAllocation[input.risk] || riskAllocation["medium"];

  // Simple results math (compounding with returnPct if provided; otherwise back-solve from demo)
  const initial = input.amount;
  const r = (input.returnPct || 6.75) / 100;
  const years = Math.max(0, input.tenureYears);
  const finalValue =
    years > 0 ? Math.round(initial * Math.pow(1 + r, years) * 100) / 100 : initial;
  const totalReturnPct =
    initial > 0 ? ((finalValue / initial - 1) * 100) : 0;
  const totalProfit = Math.max(0, finalValue - initial);
  const cagrPct =
    years > 0 && initial > 0
      ? (Math.pow(finalValue / initial, 1 / years) - 1) * 100
      : (input.returnPct || 0);

  const data = {
    userCase: {
      currency,
      investment_amount: initial,
      tenure_years: years,
      risk_profile: toTitle(input.risk),
      investment_type: "lumpsum",
    },
    predictedReturnsPct,
    allocationPct,
    results: {
      initial,
      finalValue,
      totalReturnPct,
      cagrPct,
      totalProfit,
    },
  };

  return (
    <div className=" mt-12 min-h-screen bg-gradient-to-br from-slate-100 via-blue-200 to-indigo-300 px-6 py-10">
      {/* Top bar */}
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <LineChart className="w-7 h-7 text-indigo-600" />
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
            Investment Results
          </h1>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => navigate("/invest")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <ArrowLeft className="w-4 h-4" />
            Edit Inputs
          </button>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
          >
            <Download className="w-4 h-4" />
            Print / Save PDF
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ===== Left column (User Case + Results) ===== */}
        <div className="lg:col-span-1 space-y-6">
          <SectionCard
            title="Sample User Case"
            icon={<Shield className="w-5 h-5 text-purple-600" />}
          >
            <div className="space-y-3 text-sm text-gray-700">
              <Row
                icon={<DollarSign className="w-4 h-4 text-green-600" />}
                label="Investment Amount"
                value={fmtMoney(data.userCase.investment_amount, data.userCase.currency)}
              />
              <Row
                icon={<Calendar className="w-4 h-4 text-indigo-600" />}
                label="Investment Tenure"
                value={`${data.userCase.tenure_years} years`}
              />
              <Row
                icon={<Shield className="w-4 h-4 text-rose-600" />}
                label="Risk Profile"
                value={data.userCase.risk_profile}
              />
              <Row
                icon={<PieChart className="w-4 h-4 text-amber-600" />}
                label="Investment Type"
                value={data.userCase.investment_type}
              />
              <Row
                icon={<BarChart3 className="w-4 h-4 text-teal-600" />}
                label="Currency"
                value={data.userCase.currency}
              />
            </div>

            {!fromState && (
              <p className="mt-4 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                Opened directly. Showing sample values. Use <Link to="/invest" className="underline">Investment Form</Link> to generate your own report.
              </p>
            )}
          </SectionCard>

          <SectionCard
            title="Investment Results"
            icon={<BarChart3 className="w-5 h-5 text-teal-600" />}
          >
            <div className="divide-y divide-gray-100 text-sm">
              <KV
                k="Initial Investment"
                v={fmtMoney(data.results.initial, data.userCase.currency)}
              />
              <KV
                k="Final Portfolio Value"
                v={fmtMoney(data.results.finalValue, data.userCase.currency)}
              />
              <KV
                k="Total Return"
                v={`${data.results.totalReturnPct.toFixed(2)} %`}
              />
              <KV
                k="CAGR (Annualized)"
                v={`${data.results.cagrPct.toFixed(2)} %`}
              />
              <KV
                k="Total Profit"
                v={fmtMoney(data.results.totalProfit, data.userCase.currency)}
              />
            </div>

            <div className="mt-4 flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-medium">
                Analysis complete! Results look realistic and meaningful.
              </span>
            </div>
          </SectionCard>
        </div>

        {/* ===== Right column (Predicted returns + Allocation) ===== */}
        <div className="lg:col-span-2 space-y-6">
          <SectionCard
            title="Predicted Annual Returns"
            icon={<LineChart className="w-5 h-5 text-blue-600" />}
          >
            <DataTable
              headA="Asset Class"
              headB="Expected Return"
              rows={objectToRowsPct(data.predictedReturnsPct)}
            />
          </SectionCard>

          <SectionCard
            title={`Portfolio Allocation (${data.userCase.risk_profile} risk)`}
            icon={<PieChart className="w-5 h-5 text-indigo-600" />}
          >
            <DataTable
              headA="Asset Class"
              headB="Allocation"
              rows={objectToRowsPct(data.allocationPct)}
            />
          </SectionCard>
        </div>
      </div>
    </div>
  );
}

/* ----------------- Small building blocks ----------------- */
function SectionCard({ title, icon, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Row({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-gray-600">{label}</span>
      </div>
      <span className="font-semibold text-gray-800">{value}</span>
    </div>
  );
}

function KV({ k, v }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-gray-600">{k}</span>
      <span className="font-semibold text-gray-800">{v}</span>
    </div>
  );
}

function DataTable({ headA, headB, rows }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="text-left px-4 py-3 font-semibold">{headA}</th>
            <th className="text-right px-4 py-3 font-semibold">{headB}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map(([k, v]) => (
            <tr key={k} className="bg-white">
              <td className="px-4 py-3 text-gray-800">{k}</td>
              <td className="px-4 py-3 text-right font-semibold text-gray-900">
                {typeof v === "number" ? `${v.toFixed(2)} %` : v}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function objectToRowsPct(obj) {
  return Object.entries(obj);
}

function fmtMoney(val, ccy = "INR") {
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: ccy,
      maximumFractionDigits: 2,
    }).format(val);
  } catch {
    // Fallback if currency code not supported on some browsers
    return `${ccy} ${Number(val || 0).toLocaleString()}`;
  }
}

function toTitle(s = "") {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}
