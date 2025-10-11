// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import About from "./components/About";
// import Help from "./components/Help";
// import Contact from "./components/Contact";

// function App() {
//   return (
//     <div className="min-h-screen bg-amber-200 text-white flex flex-col">
//       <Header />  {/* Navbar */}
//       <main className="flex-1 flex justify-center items-center">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/help" element={<Help />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";
import Contact from "./components/Contact";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />

      <main className="flex-1 flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

