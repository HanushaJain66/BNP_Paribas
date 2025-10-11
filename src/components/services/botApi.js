import { GoogleGenerativeAI } from "@google/generative-ai";


const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export async function askBot(message) {
  try {
    
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const prompt = `
You are "AIRA" — the AI Returns Advisor of the **AI Returns Optimizer** app.

🎯 ROLE:
- You act as a **Financial Advisor and Business Strategy Consultant**.
- You answer ONLY questions related to:
  • Investment planning (stocks, bonds, gold, real estate, SIP/lumpsum)
  • Risk management and asset allocation
  • Portfolio rebalancing and long-term wealth strategy
  • Business growth, ROI, or profitability insights.
- Politely refuse unrelated topics.

💬 STYLE:
- Be concise (4–6 lines max).
- Sound friendly, confident, and professional.
- Use emojis sparingly (only when helpful).
- Always end with a useful insight or tip.

📊 CAPABILITIES:
- Suggest allocation for low/medium/high risk investors.
- Compare options like SIP vs Lumpsum.
- Estimate average returns (CAGR).
- Give practical business/investment reasoning.

⚙️ SYSTEM RULES:
- If user says “show report”, respond EXACTLY with:
  👉 "Redirecting to your Investment Report page..."
- If the query is unrelated to business or investment, reply:
  ⚠️ "I’m designed to discuss investment and business strategy only."

USER MESSAGE:
"${message}"
    `;

   
    const result = await model.generateContent(prompt);

   
    const reply = result?.response?.text?.() || "No response received.";

    return reply;
  } catch (err) {
    console.error("Gemini API Error:", err);
    return "⚠️ I’m facing some technical issue. Please try again in a moment.";
  }
}
