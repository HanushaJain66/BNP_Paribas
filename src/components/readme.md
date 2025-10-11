Here’s the assignment boiled down to exactly what they’re asking for.

# Problem in one line

**Build an AI-driven app that takes an investor’s preferences and outputs a recommended multi-asset portfolio, projects returns over time, and visualizes the results—using ML + LLM/agents.**

# What inputs you must accept

* Investment amount (lump sum and/or SIP)
* Tenure (years)
* Risk profile (low / moderate / high)
* (Optional) Return expectation
* Preferences like rebalancing rules, frequency, withdrawals (SWP)

# What you must output

1. **Portfolio allocation** across asset classes in the dataset (S&P 500 / US Small Cap / 3-mo T-Bills / US T-Bonds / Corporate Bonds / Real Estate / Gold).
2. **Projected portfolio returns** over the investment window.
3. **Visualizations** of portfolio value over time (growth curves, comparisons).
4. (Advanced) **KPIs** like Alpha, Beta, Volatility vs. a benchmark.

# Data you must use

* The last ~50 years returns dataset: `histretSP.xls` (NYU Stern / Damodaran).
* Use it to train/predict asset-class returns and to simulate portfolios.

# Required tech / approach

* **ML (supervised)** to predict future returns for each asset class.
* **LLM + LangGraph + agents** to:

  * Choose / call asset-specific predictors,
  * Map user risk profile to allocation rules,
  * Orchestrate the full flow (validate → allocate → predict → simulate → visualize).
* Acceptable alternative: statistics-based models with rule-based handling.

# Expected capabilities (by task tier)

**Basic**

* Train/implement asset-class return predictors.
* Create an agentic/LangGraph flow that drives predictions + allocation.
* End-to-end pipeline: read inputs → validate → run models → store → display.
* Provide standard allocations and plots for Low/Moderate/High risk users.

**Intermediate**

* **Rebalancing simulations** (e.g., reduce Equity by 5% every 2 years).
* **What-if reallocations** (e.g., move Bonds to Equity).
* Structured outputs from agents for allocation rules.
* Compare portfolio vs. benchmark / reference portfolio historically.

**Advanced**

* Fine-tune or optimize to meet goals (e.g., “increase returns by 5%”).
* **SWP**: model withdrawals (e.g., 2% quarterly after 5 years) and plot impact.
* Portfolio effectiveness metrics (Alpha, Beta, Volatility) vs. benchmark.
* Compare your portfolio’s performance vs. each asset class.

**Nice-to-have (engineering)**

* Robust error handling
* Clean, documented code
* Deployable app
* CI/testing
* Logging/analytics
* Performance/scalability considerations

# What a strong submission includes

* **Working UI**: input form → results page with allocation table + charts.
* **ML models**: per-asset predictor (explain choice, features, training split).
* **Agent flow** (LangGraph): nodes for validation, prediction, allocation, simulation.
* **Simulation engine**: supports lump sum, SIP, rebalancing, SWP.
* **Visualizations**: portfolio curve, allocation pie/stacked bars, benchmark line.
* **Docs**: architecture diagram, data model, sequence flow, model choices, assumptions, limitations, and how to reproduce.
* **Benchmarks**: show backtests / comparison to S&P 500 or 60/40 baseline.

# Minimal viable product (MVP) you can demo quickly

1. Upload/ingest `histretSP.xls`.
2. Simple predictors (e.g., rolling mean / ARIMA / linear regression) per asset class.
3. Rule-based allocation by risk profile (e.g., Low: more bonds; High: more equities).
4. Simulator to compound monthly with optional SIP; line chart of value over time.
5. Results page summarizing allocation, CAGR, total return, final value.

# Stretch goals to impress

* Agent asks clarifying questions and proposes revised scenarios.
* Rebalancing & SWP toggles with live re-simulation.
* Optimization (e.g., mean-variance / risk parity) with constraints.
* KPIs (Alpha/Beta/Volatility) vs. benchmark; waterfall of contributions.

# Suggested architecture (quick sketch)

* **Frontend (React)**: Input form → Result dashboard (Recharts/Chart.js).
* **Orchestrator (LangGraph)**:

  * Node A: Validate/normalize inputs
  * Node B: Allocation agent (LLM + rules)
  * Node C: Per-asset prediction agents (call trained models)
  * Node D: Simulator (apply SIP/lumpsum, rebalancing, SWP)
  * Node E: Formatter → UI/DB
* **Model service**: Python FastAPI for predictors; joblib/onnx models.
* **Storage**: S3/DB for runs and analytics.
* **Benchmark module**: reference series (S&P 500) for comparisons.

That’s the brief. If you want, I can turn this into a checklist for your README and a set of tickets (MVP → Intermediate → Advanced) so your team can split the work cleanly.
