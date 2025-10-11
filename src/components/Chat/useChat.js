import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { askBot } from "../services/botApi"; // ✅ Correct path

export function useChat({ onClose }) {
  const [messages, setMessages] = useState([
    {
      id: uuid(),
      text: "Hi! I can build a portfolio. Tell me amount, tenure, and risk (low/medium/high). Example: “Invest ₹5L for 10 years, moderate risk”.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMsg = { id: uuid(), text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const reply = await askBot(text); // <-- Gemini AI call
      setMessages((prev) => [
        ...prev,
        { id: uuid(), text: reply, sender: "bot" },
      ]);

      // ✅ Auto-navigate if Gemini responds with report trigger
      if (reply.includes("Redirecting to your Investment Report page")) {
        setTimeout(() => {
          navigate("/report");
          onClose?.();
        }, 1200);
      }

    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { id: uuid(), text: "⚠️ Something went wrong. Try again!", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return { messages, input, setInput, sendMessage, loading };
}
