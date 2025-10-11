import { useState } from "react";
import SignupForm from "./SignupForm"; 

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen w-full absolute top-0 left-0 bg-black bg-opacity-50 backdrop-blur-sm">
      {/* If user clicked Sign Up → show SignupForm */}
      {!isLogin ? (
        <SignupForm />
      ) : (
        <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-80 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Login</h2>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white font-semibold transition duration-200"
            >
              Login
            </button>
          </form>

          {/* Toggle link */}
          <p className="mt-4 text-gray-300 text-sm">
            Don’t have an account?{" "}
            <span
              onClick={() => setIsLogin(false)}
              className="text-yellow-400 cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
