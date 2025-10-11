import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";
import Contact from "./components/Contact";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import InvestmentForm from "./components/InvestmentForm";
import InvestmentReport from  "./components/InvestmentReport";
import ChatWidget from "./components/chat/ChatWidget";  

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <main className="flex-1 bg-amber-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/invest" element={<InvestmentForm />} />
           <Route path="/report" element={<InvestmentReport />} />
        </Routes>
      </main>
      <ChatWidget />
    </div>
  );
}

export default App;
