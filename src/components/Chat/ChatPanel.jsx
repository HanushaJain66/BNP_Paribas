// src/components/Chat/ChatPanel.jsx
import { useChat } from "./useChat";
import { X, Send } from "lucide-react";

export default function ChatPanel({ onClose }) {
  const { messages, input, setInput, sendMessage, loading } = useChat({ onClose });

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-slate-50 to-blue-100">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <h2 className="text-lg font-bold text-gray-800">AI Returns Advisor</h2>
        <button onClick={onClose}>
          <X className="w-5 h-5 text-gray-600 hover:text-gray-800" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded-2xl text-sm shadow ${
                m.sender === "user"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {loading && <div className="text-sm text-gray-500 italic">AI is thinking...</div>}
      </div>

      {/* Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(input);
        }}
        className="p-3  border-t flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 rounded-lg border text-black border-gray-300 px-3 py-2 text-sm 
                     outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="p-2 bg-indigo-60 text-black rounded-lg hover:bg-indigo-700 transition"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
