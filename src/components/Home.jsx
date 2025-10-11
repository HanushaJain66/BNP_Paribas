import { useState } from "react";
import AuthForm from "./AuthForm";

function Home() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white relative">
      <h1 className="text-5xl font-bold mb-4">Welcome to Care for grow</h1>
      <p className="text-lg mb-6">Welcome to the Home Page!</p>

      <div className="space-x-4">
        <button
          onClick={() => setShowAuth(true)}
          className="bg-white/20 px-6 py-2 rounded-lg hover:bg-white/30 transition"
        >
          Login / Sign Up
        </button>
      </div>

      {/* Transparent overlay */}
      {showAuth && (
        <AuthForm />
      )}
    </div>
  );
}

export default Home;
