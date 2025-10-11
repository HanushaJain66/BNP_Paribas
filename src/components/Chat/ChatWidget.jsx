// src/components/Chat/ChatWidget.jsx
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import ChatPanel from "./ChatPanel";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center 
                   w-14 h-14 rounded-full bg-indigo-600 text-white shadow-xl 
                   hover:bg-indigo-700 transition-transform active:scale-95"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[380px] h-[520px] 
                     bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
        >
          <ChatPanel onClose={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}
